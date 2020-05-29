'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('dashboard', 'Dashboard/CompanyEndProductsController.index').as('client.dashboard')
})
  .prefix('v1/client')
  .namespace('Client')
