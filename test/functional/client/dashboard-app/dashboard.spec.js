'use strict'

const { test, trait } = use('Test/Suite')('Dashboard Cliente')
// permite usar as requisições para API
trait('Test/ApiClient')

test('empresas cadastradas recentemente e produtos mais vendidos da semana',
  async ({ client, assert }) => {
    const response = await client.get('/v1/client/dashboard').end()
    response.assertStatus(200)
    response.assertJSONSubset({
      data: {
        companies: [],
        topProducts: []
      }
    })
  })
// test('mais comprados da semana', async ({ client, assert }) => {
//   await User.create({
//     username: 'Luan',
//     phone: '123123123123',
//     email: 'luan@gmail.com',
//     password: 'asdfasdf',
//     confirmation_mail: true
//   })

//   const response = await client.post('/v1/auth/client/login')
//     .send({
//       email: 'luan@gmail.com',
//       password: 'asdfasdf'
//     })
//     .end()

//   response.assertStatus(200)
// })
// test('lojas cadastradas recentemente', async ({ client, assert }) => {
//   await User.create({
//     username: 'Luan',
//     phone: '123123123123',
//     email: 'luan@gmail.com',
//     password: 'asdfasdf',
//     confirmation_mail: true
//   })

//   const response = await client.post('/v1/auth/client/login')
//     .send({
//       email: 'luan@gmail.com',
//       password: 'asdfasdf'
//     })
//     .end()

//   response.assertStatus(200)
// })
