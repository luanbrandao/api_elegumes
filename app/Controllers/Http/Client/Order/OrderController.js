'use strict'
const Database = use('Database')
const Order = use('App/Models/Order')
const OrderService = use('App/Services/Orders/OrderService')

class OrderController {
  async store ({ params, request, response, transform, auth }) {
    const trx = await Database.beginTransaction()

    try {
      const { items, company } = request.only(['items', 'company'])
      const client = await auth.getUser()

      var order = await Order.create({ user_id: client.id, company_id: company }, trx)

      const service = new OrderService(order, trx)
      if (items.length > 0) {
        await service.syncItems(items)
      }

      await trx.commit()
      return response.json({ order })
    } catch (error) {
      await trx.rollback()
      return response.status(400).send({
        // message: 'Não foi possível criar seu pedido no momento!'
        message: error
      })
    }
  }
}

module.exports = OrderController
