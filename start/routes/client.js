'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('categories', 'CategoriesController.index').as('client.categories')
})
  .prefix('v1/client')
  // caminho
  .namespace('Client/Category')
