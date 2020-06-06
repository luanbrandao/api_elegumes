'use strict'
const Category = use('App/Models/Category')

const { test, trait, afterEach } = use('Test/Suite')('Categories')
// permite usar as requisições para API
trait('Test/ApiClient')

afterEach(async () => {
  await Category.query().delete()
})

test('retornas os produtos de uma categoria usando seu id, com paginação',
  async ({ client, assert }) => {
    const category = await Category.all()
    const categoryJson = category.toJSON()

    const response = await client.get(`/v1/client/categories/${categoryJson[0].id}/produts/`).end()
    response.assertStatus(200)
    response.assertJSONSubset({
      data: [{
        image: {}
      }]
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
