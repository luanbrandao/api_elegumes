'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('dashboard', 'NewCompanyEndTopProductsController.index').as('client.dashboard')
  Route.get('promotions', 'ProductPromotionController.index').as('client.promotions')
})
  .prefix('v1/client')
  // caminho
  .namespace('Client/Dashboard')
