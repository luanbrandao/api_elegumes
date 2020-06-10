'use strict'

const { test, trait } = use('Test/Suite')('Order')
// permite usar as requisições para API
const Company = use('App/Models/Company')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
// trait('Session/Client')

test('tenta cadastrar uma nova avaliação na loja',

  async ({ client, assert }) => {
    const companies = await Company.all()
    const companiesJson = companies.toJSON()
    const users = await User.all()
    const usersJson = users.toJSON()

    const response = await client.post('/v1/client/ratings')
      .loginVia(usersJson[0])
      .send({
        company: companiesJson[0].id,
        rate: 3,
        comment: 'ótima loja'
      })
      .end()

    response.assertStatus(200)
    response.assertJSONSubset({
      data: { rating: {} }
    })
  })
