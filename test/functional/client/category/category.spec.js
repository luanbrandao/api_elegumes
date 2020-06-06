'use strict'

const { test, trait } = use('Test/Suite')('Categories')
// permite usar as requisições para API
trait('Test/ApiClient')

test('retorna as categorias ativas com seus produtos',
  async ({ client, assert }) => {
    const response = await client.get('/v1/client/categories').end()
    response.assertStatus(200)
    response.assertJSONSubset({
      data: {
        categories: [{
          products: [{ image: {} }]
        }]
      }
    })
  })
