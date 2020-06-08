'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('order', 'OrderController.store').as('client.order')
})
  .middleware('auth')
  .prefix('v1/client')
  .namespace('Client/Order')
