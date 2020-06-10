'use strict'
const Database = use('Database')
const Order = use('App/Models/Order')
const OrderService = use('App/Services/Orders/OrderService')
const OrderTransformer = use('App/Transformers/Order/OrderTransformer')

class OrderController {
  async show ({ params, request, response, transform, auth, pagination }) {
    const client = await auth.getUser()
    const { status } = request.only(['status'])

    const query = Order.query()

    /*
        pending,cancelled,shipped,paid,finished
    */
    if (status) {
      query.where('status', status)
    }

    let orders = await query
      .where('user_id', client.id)
      .orderBy('created_at', 'desc')
      .paginate(pagination.page, pagination.perpage)

    orders = await transform.include('company').paginate(orders, OrderTransformer)

    return response.json(orders)
  }

  async store ({ params, request, response, transform, auth }) {
    const trx = await Database.beginTransaction()

    try {
      const { items, company } = request.only(['items', 'company'])
      const client = await auth.getUser()

      let order = await Order.create({ user_id: client.id, company_id: company }, trx)

      const service = new OrderService(order, trx)
      if (items.length > 0) {
        await service.syncItems(items)
      }

      await trx.commit()

      /*
      * ativa os hooks de cálculo automático de total e quantidade de items
      */
      order = await Order.find(order.id)

      const total = parseFloat(order.total)

      /*
      *  atualiza o total depois pois ele faz ele cálculo só depois que cria a ordem,
      *  varendo todos os seus itens
      */
      order.total = total
      await order.save()

      order = await transform
        .include('items')
        .item(order, OrderTransformer)

      return response.json({ order })
    } catch (error) {
      await trx.rollback()
      return response.status(400).send({
        message: 'Não foi possível criar seu pedido no momento!'
      })
    }
  }
}

module.exports = OrderController
