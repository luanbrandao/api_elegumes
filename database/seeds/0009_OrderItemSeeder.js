'use strict'

/*
|--------------------------------------------------------------------------
| OrderItemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const OrderItem = use('App/Models/OrderItem')

const Order = use('App/Models/Order')
const Product = use('App/Models/Product')

class OrderItemSeeder {
  async run () {
    const orders = await Order.all()
    const ordersJson = orders.toJSON()
    const products = await Product.all()
    const productsJson = products.toJSON()

    await OrderItem.create({
      quantity: 2,
      subtotal: 2,
      order_id: ordersJson[0].id,
      product_id: productsJson[0].id
    })

    await OrderItem.create({
      quantity: 3,
      subtotal: 3,
      order_id: ordersJson[1].id,
      product_id: productsJson[1].id
    })
  }
}

module.exports = OrderItemSeeder
