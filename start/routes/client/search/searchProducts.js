'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('products', 'SearchProductController.index').as('client.search.product')
})
  .prefix('v1/client/search')
  // caminho
  .namespace('Client/Search')
