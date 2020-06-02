'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('search', 'SearchController.index').as('client.search')
})
  .prefix('v1/client')
  // caminho
  .namespace('Client/Search')
