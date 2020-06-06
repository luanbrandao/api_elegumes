'use strict'

const { test, trait } = use('Test/Suite')('Search')
// permite usar as requisições para API
trait('Test/ApiClient')

test('pesquisa as empresas pelo nome com paginação',
  async ({ client, assert }) => {
    const response = await client.get('/v1/client/search/companies').end()
    response.assertStatus(200)
    response.assertJSONSubset({
      data: [{
        image: {}
      }]
    })
  })
