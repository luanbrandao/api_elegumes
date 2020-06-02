'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('', 'SearchController.index').as('client.search')
  Route.get('products', 'SearchProductController.index').as('client.search.product')
  Route.get('companies', 'SearchCompanyController.index').as('client.search.company')
})
  .prefix('v1/client/search')
  // caminho
  .namespace('Client/Search')
