'use strict'
const { test, trait, afterEach } = use('Test/Suite')('Autenticação Cliente')
// permite usar as requisições para API
trait('Test/ApiClient')
const User = use('App/Models/User')

afterEach(async () => {
  // await User.query().delete()
})

test('login de cliente', async ({ client, assert }) => {
  await User.create({
    username: 'Luan',
    phone: '123123123123',
    email: 'teste@gmail.com',
    password: 'asdfasdf',
    confirmation_mail: true
  })

  const response = await client.post('/v1/auth/client/login')
    .send({
      email: 'teste@gmail.com',
      password: 'asdfasdf'
    })
    .end()

  response.assertStatus(200)
})

test('autenticação de cliente com senha invalida', async ({ client, assert }) => {
  const response = await client.post('/v1/auth/client/login')
    .send({
      email: 'teste@gmail.com',
      password: 'asdfasdf1'
    })
    .end()

  response.assertError({ error: 'Falha na autenticação, tente novamente!' })
})

test('autenticação de cliente com email não confirmado', async ({ client, assert }) => {
  await User.create({
    username: 'Luan',
    phone: '123123123123',
    email: 'conformationInvalid@gmail.com',
    password: 'asdfasdf',
    confirmation_mail: false
  })

  const response = await client.post('/v1/auth/client/login')
    .send({
      email: 'conformationInvalid@gmail.com',
      password: 'asdfasdf'
    })
    .end()

  response.assertError({ error: 'Confirme seu e-mail!' })
})
