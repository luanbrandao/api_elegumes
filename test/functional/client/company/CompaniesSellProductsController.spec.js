'use strict'

const { test, trait } = use('Test/Suite')('Company sell product')
const Company = use('App/Models/Company')
// permite usar as requisições para API
trait('Test/ApiClient')

test('retorna todas as lojas que vendem um determinado produto',
  async ({ client, assert }) => {
    const newCompany = await await Company.create({
      name: 'Frutlândia da Prainha',
      owner: 'senhor frutlandio',
      primary_phone: '1111111111',
      secundary_phone: '2222222222222',
      rating: 4,
      active: true
    })

    const company = newCompany.toJSON()

    const response = await client.get(`/v1/client/companies/sell/product_default/${company.id}`).end()
    response.assertStatus(200)
    response.assertJSONSubset({
      pagination: { total: 0, perPage: 20, page: 1, lastPage: 0 }
    })
  })
