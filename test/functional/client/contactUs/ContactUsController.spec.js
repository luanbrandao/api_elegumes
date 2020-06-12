'use strict'

const { test, trait } = use('Test/Suite')('Fale Conosco')
// permite usar as requisições para API
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')

test('tenta entrar em contato conosco',

  async ({ client, assert }) => {
    const users = await User.all()
    const usersJson = users.toJSON()

    const response = await client.post('/v1/client/contacts')
      .loginVia(usersJson[0])
      .send({
        title: 'isso ai',
        message: 'ótimo atendimento'
      })
      .end()

    response.assertStatus(200)
    response.assertJSONSubset({
      data: { contactUs: {} }
    })
  })
