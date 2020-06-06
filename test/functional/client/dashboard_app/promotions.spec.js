'use strict'

const { test, trait } = use('Test/Suite')('Dashboard Cliente')
// permite usar as requisições para API
trait('Test/ApiClient')

test('produtos com descontos',
  async ({ client, assert }) => {
    const response = await client.get('/v1/client/promotions').end()
    response.assertStatus(200)
    response.assertJSONSubset({
      data: [{
        image: {},
        productDefault: { image: {} },
        company: {}
      }]
    })
  })
