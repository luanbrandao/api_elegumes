'use strict'

const { test, trait } = use('Test/Suite')('Search')
// permite usar as requisições para API
trait('Test/ApiClient')

test('pesquisa os produtos/lojas com filtro pelo nome',
  async ({ client, assert }) => {
    const response = await client.get('/v1/client/search').end()
    response.assertStatus(200)
    response.assertJSONSubset({
      companies: { pagination: { total: 0, perPage: 10, page: 1, lastPage: 0 }, data: [] },
      products: { pagination: { total: 0, perPage: 10, page: 1, lastPage: 0 }, data: [] }
    })
  })
