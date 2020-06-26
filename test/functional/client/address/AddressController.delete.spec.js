'use strict'

const { test, trait } = use('Test/Suite')('Endereço Delete')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
// trait('Session/Client')

test('tente deletar o endereço do usuário',

  async ({ client, assert }) => {
    const users = await User.all()
    const usersJson = users.toJSON()

    const newAddress = await client.post('/v1/client/addresses')
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

    const addressId = newAddress.body.data.id

    const response = await client.delete(`/v1/client/addresses/${addressId}`)
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

    response.assertStatus(204)
  })
test('tente deletar o endereço do usuário sem um id válido',

  async ({ client, assert }) => {
    const users = await User.all()
    const usersJson = users.toJSON()

    const addressId = 'not-exist-id'

    const response = await client.delete(`/v1/client/addresses/${addressId}`)
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

    response.assertStatus(400)
  })
