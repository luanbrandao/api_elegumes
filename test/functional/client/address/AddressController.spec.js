'use strict'

const { test, trait } = use('Test/Suite')('Endereço')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
// trait('Session/Client')

test('listagem de todos os endeços do cliente',

  async ({ client, assert }) => {
    const users = await User.all()
    const usersJson = users.toJSON()

    const response = await client.get('/v1/client/addresses')
      .loginVia(usersJson[0])
      .end()

    response.assertStatus(200)
  })

test('tenta cadastrar uma novo endereço do cliente',

  async ({ client, assert }) => {
    const users = await User.all()
    const usersJson = users.toJSON()

    const response = await client.post('/v1/client/addresses')
      .loginVia(usersJson[0])
      .send({
        description: 'Rua do loja x',
        street: 'rua x',
        cep: '01010101',
        neighborhood: 'lugar tão tão distânte',
        city: 'Santarém',
        state: 'Pará',
        lat: '111111',
        long: '222222'
      })
      .end()

    response.assertStatus(200)
  })
