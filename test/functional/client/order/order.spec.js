'use strict'

const { test, trait } = use('Test/Suite')('Order')
// permite usar as requisições para API
const Company = use('App/Models/Company')
const Product = use('App/Models/Product')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
// trait('Session/Client')

test('criação de novo pedido do cliente',

  async ({ client, assert }) => {
    const companies = await Company.all()
    const companiesJson = companies.toJSON()

    const products = await Product.all()
    const productsJson = products.toJSON()

    const users = await User.all()
    const usersJson = users.toJSON()

    const response = await client.post('/v1/client/order')
      .loginVia(usersJson[0])
      .send({
        items: [
          { product_id: productsJson[0].id, quantity: 2 }
        ],
        company: companiesJson[0].id
      })
      .end()

    response.assertStatus(200)
    response.assertJSONSubset({
      order: {
        items: [
          { product: { image: null, productDefault: {} } }
        ]
      }
    })
  })
