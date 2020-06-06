'use strict'

const { test, trait } = use('Test/Suite')('Dashboard Cliente')
// permite usar as requisições para API
trait('Test/ApiClient')

test('novas empresas e produtos mais vendidos da semana',
  async ({ client, assert }) => {
    const response = await client.get('/v1/client/dashboard').end()
    response.assertStatus(200)
    response.assertJSONSubset({
      data: {
        newCompanies: [{ image: {}, address: {} }],
        topProducts: [{ image: {} }]
      }
    })
  })
