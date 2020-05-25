'use strict'

const { test, trait, afterEach } = use('Test/Suite')('User')
// permite usar as requisições para API
trait('Test/ApiClient')
const Mail = use('Mail')

const User = use('App/Models/User')

afterEach(async () => {
  await User.query().delete()
})

test('Register new client', async ({ client, assert }) => {
  Mail.fake()

  const response = await client.post('/v1/auth/client/register')
    .send({
      username: 'newUser',
      email: 'newUser@gmail.com',
      password: 'asdfasdf',
      password_confirmation: 'asdfasdf',
      phone: '12312312312',
      birth: '2018-09-10 18:00:00'
    })
    .end()

  response.assertStatus(201)
  response.assertJSONSubset({
    data: {
      username: 'newUser',
      email: 'newUser@gmail.com'
    }
  })

  const user = await User.findBy('email', 'newUser@gmail.com')
  assert.equal(user.toJSON().email, 'newUser@gmail.com')

  Mail.restore()
})

test('Register client e-mail exist', async ({ client, assert }) => {
  Mail.fake()

  await client.post('/v1/auth/client/register')
    .send({
      username: 't1',
      email: 'newUser@gmail.com',
      password: 'asdfasdf',
      password_confirmation: 'asdfasdf',
      phone: '12312312312',
      birth: '2018-09-10 18:00:00'
    })
    .end()

  const response = await client.post('/v1/auth/client/register')
    .send({
      username: 't1',
      email: 'newUser@gmail.com',
      password: 'asdfasdf',
      password_confirmation: 'asdfasdf',
      phone: '12312312312',
      birth: '2018-09-10 18:00:00'
    })
    .end()

  response.assertError({
    error: [
      {
        message: 'Este e-mail já está em uso!',
        field: 'email',
        validation: 'unique'
      }
    ]
  })

  const user = await User.findBy('email', 'newUser@gmail.com')

  assert.equal(user.toJSON().email, 'newUser@gmail.com')

  Mail.restore()
})
