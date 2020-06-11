'use strict'
const { test, trait } = use('Test/Suite')('Autenticação Cliente')
// permite usar as requisições para API
trait('Test/ApiClient')
const User = use('App/Models/User')

test('resete de senha ', async ({ client, assert }) => {
  await User.create({
    username: 'forgot',
    phone: '123123123123',
    email: 'forgot@gmail.com',
    password: 'asdfasdf',
    confirmation_mail: true
  })

  const response = await client.post('/v1/auth/passwords')
    .send({
      email: 'forgot@gmail.com'
    })
    .end()

  response.assertStatus(200)
})

test('resete de senha com e-mail que não existe', async ({ client, assert }) => {
  const response = await client.post('/v1/auth/passwords')
    .send({
      email: 'notExist@gmail.com'
    })
    .end()

  response.assertStatus(404)
  response.assertError({ message: 'Algo não deu certo, esse e-mail existe?' })
})
