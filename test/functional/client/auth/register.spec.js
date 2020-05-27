'use strict'

const { test, trait, afterEach } = use('Test/Suite')('Register Client')
// permite usar as requisições para API
trait('Test/ApiClient')
const Mail = use('Mail')
const User = use('App/Models/User')
const ConfirmationMail = use('App/Models/ConfirmationMail')

afterEach(async () => {
  await ConfirmationMail.query().delete()
  await User.query().delete()
})

test('register new client', async ({ client, assert }) => {
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

test('register client e-mail exist', async ({ client, assert }) => {
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

test('confirmation Mail', async ({ client, assert }) => {
  Mail.fake()

  const user = await client.post('/v1/auth/client/register')
    .send({
      username: 'newUser',
      email: 'confirmationMail@gmail.com',
      password: 'asdfasdf',
      password_confirmation: 'asdfasdf',
      phone: '12312312312',
      birth: '2018-09-10 18:00:00'
    })
    .end()

  const data = user.body.data

  const confirmationMail = await ConfirmationMail.findByOrFail('user_id', data.id)

  const token = confirmationMail.$originalAttributes.token
  // simulo o usuário clicando no link enviado para seu e-mail
  const confirmationResponse = await client.get('/v1/auth/confirmation_mail?token=' + token).end()

  confirmationResponse.assertStatus(200)
  confirmationResponse.assertJSONSubset({
    message: 'Sua conta foi ativada com sucesso!'
  })

  // // tem que ter deletado a confirmação depois de ativar a conta
  // const _confirmationMail = await ConfirmationMail.findBy('token', token)
  // assert.equal(_confirmationMail, null)

  Mail.restore()
})
