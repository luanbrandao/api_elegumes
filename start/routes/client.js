'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('categories', 'CategoriesController.index').as('client.categories')
  Route.get('categories/:id/produts', 'CategoriesProductsController.index').as('client.category.id.products')
})
  .prefix('v1/client')
  // caminho
  .namespace('Client/Category')
