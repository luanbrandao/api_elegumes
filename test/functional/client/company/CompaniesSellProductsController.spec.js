'use strict'

const { test, trait, afterEach } = use('Test/Suite')('Company sell product')
const Company = use('App/Models/Company')
// permite usar as requisições para API
trait('Test/ApiClient')

afterEach(async () => {
  await Company.query().delete()
})

test('retorna todas as lojas que vendo um determinado produto',
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

    const response = await client.get(`/v1/client/companies/sell/product/${company.id}`).end()
    response.assertStatus(200)
    response.assertJSONSubset({
      pagination: { total: 0, perPage: 20, page: 1, lastPage: 0 }
    })
  })