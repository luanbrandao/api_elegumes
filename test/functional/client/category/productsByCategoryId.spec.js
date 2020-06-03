'use strict'
const Category = use('App/Models/Category')

const { test, trait, afterEach } = use('Test/Suite')('Categories')
// permite usar as requisições para API
trait('Test/ApiClient')

afterEach(async () => {
  await Category.query().delete()
})

test('retornas os produtos de uma categorya usando seu id, com paginação',
  async ({ client, assert }) => {
    const newCategory = await Category.create({
      title: 'Legumes',
      description: 'Ótima qualidade',
      active: true
    })

    const category = newCategory.toJSON()

    const response = await client.get(`/v1/client/categories/${category.id}/produts/`).end()
    response.assertStatus(200)
    response.assertJSONSubset({
      pagination: { total: 0, perPage: 20, page: 1, lastPage: 0 }
    })
  })

test('tenta buscas os produtos de uma categoria que não existe',
  async ({ client, assert }) => {
    const response = await client.get('/v1/client/categories/21123/produts/').end()
    response.assertStatus(400)
    response.assertError({
      message: 'Falha na requisição, tente novamente!'
    })
  })
