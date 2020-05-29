'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('dashboard', 'CompanyEndProductsController.index').as('client.dashboard')
})
  .prefix('v1/client')
  // caminho
  .namespace('Client/Dashboard')
