'use strict'

const Route = use('Route')

/*
  página inicial do app
*/
Route.group(() => {
  Route.get('dashboard', 'NewCompanyEndTopProductsController.index').as('client.dashboard')
  Route.get('promotions', 'ProductPromotionController.index').as('client.promotions')
})
  .prefix('v1/client')
  .namespace('Client/Dashboard')

/*
   página de pesquisa
*/
Route.group(() => {
  Route.get('categories', 'CategoriesController.index').as('client.categories')
  Route.get('categories/:id/produts', 'CategoriesProductsController.index').as('client.category.id.products')
})
  .prefix('v1/client')
  .namespace('Client/Category')

Route.group(() => {
  Route.get('', 'SearchController.index').as('client.search')
  Route.get('products', 'SearchProductController.index').as('client.search.product')
  Route.get('companies', 'SearchCompanyController.index').as('client.search.company')
})
  .prefix('v1/client/search')
  .namespace('Client/Search')
