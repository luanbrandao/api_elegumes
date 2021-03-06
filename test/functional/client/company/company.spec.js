'use strict'

const { test, trait } = use('Test/Suite')('Company')
const Company = use('App/Models/Company')
// permite usar as requisições para API
trait('Test/ApiClient')

test('detalhes loja',
  async ({ client, assert }) => {
    const companies = await Company.all()
    const companiesJson = companies.toJSON()

    const response = await client.get(`/v1/client/company/${companiesJson[0].id}`).end()
    response.assertStatus(200)

    response.assertJSONSubset({
      data: {
        company: { image: {}, address: {}, stars: {} }
      }
    })
  })

test('produtos de uma loja',
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

    const response = await client.get(`/v1/client/company/${company.id}/products`).end()
    response.assertStatus(200)

    response.assertJSONSubset({
      pagination: { total: 0, perPage: 20, page: 1, lastPage: 0 }
    })
  })

test('comentários de uma loja',
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

    const response = await client.get(`/v1/client/company/${company.id}/comments`).end()
    response.assertStatus(200)

    response.assertJSONSubset({
      pagination: { total: 0, perPage: 20, page: 1, lastPage: 0 }
    })
  })
