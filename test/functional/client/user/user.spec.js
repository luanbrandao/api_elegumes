'use strict'

const { test, trait } = use('Test/Suite')('Cliente Update')
// permite usar as requisições para API
trait('Test/ApiClient')
trait('Auth/Client')
const Mail = use('Mail')
const User = use('App/Models/User')

test('atualiza os dados do cliente', async ({ client, assert }) => {
  Mail.fake()

  const response = await client.post('/v1/auth/client/register')
    .send({
      username: 'update',
      email: 'update@gmail.com',
      password: 'asdfasdf',
      password_confirmation: 'asdfasdf',
      phone: '12312312312',
      birth: '2018-09-10 18:00:00'
    })
    .end()

  const users = await User.find(response.body.data.id)

  const responseUpdate = await client.put('/v1/client/profile')
    .loginVia(users)
    .send({
      username: 'update2',
      phone: '222222222',
      birth: '2018-09-10 18:00:00'
    })
    .end()

  responseUpdate.assertStatus(201)
  Mail.restore()
})
