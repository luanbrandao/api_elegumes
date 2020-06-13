'use strict'

const { test, trait } = use('Test/Suite')('Anúncios')

trait('Test/ApiClient')
trait('Auth/Client')
// trait('Session/Client')

test('busca todos os anúncios ativos',

  async ({ client, assert }) => {
    const response = await client.get('/v1/client/announcements').end()
    response.assertStatus(200)
    response.assertJSONSubset({
      pagination: { },
      data: []
    })
  })
