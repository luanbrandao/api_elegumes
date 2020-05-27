'use strict'

const { test, trait, afterEach } = use('Test/Suite')('Login Client')
// permite usar as requisições para API
trait('Test/ApiClient')
const User = use('App/Models/User')

afterEach(async () => {
  await User.query().delete()
})

test('client login', async ({ client, assert }) => {
  await User.create({
    username: 'Luan',
    phone: '123123123123',
    email: 'luan@gmail.com',
    password: 'asdfasdf',
    confirmation_mail: true
  })

  const response = await client.post('/v1/auth/client/login')
    .send({
      email: 'luan@gmail.com',
      password: 'asdfasdf'
    })
    .end()

  response.assertStatus(200)
})

test('client login with invalid password', async ({ client, assert }) => {
  await User.create({
    username: 'Luan',
    phone: '123123123123',
    email: 'luan@gmail.com',
    password: 'asdfasdf',
    confirmation_mail: true
  })

  const response = await client.post('/v1/auth/client/login')
    .send({
      email: 'luan@gmail.com',
      password: 'asdfasdf1'
    })
    .end()

  response.assertError({ error: 'Falha na autenticação, tente novamente!' })
})

test('client login with confirnation mail invalid', async ({ client, assert }) => {
  await User.create({
    username: 'Luan',
    phone: '123123123123',
    email: 'luan@gmail.com',
    password: 'asdfasdf',
    confirmation_mail: false
  })

  const response = await client.post('/v1/auth/client/login')
    .send({
      email: 'luan@gmail.com',
      password: 'asdfasdf1'
    })
    .end()

  response.assertError({ error: 'Confirme seu e-mail!' })
})
