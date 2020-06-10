'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('orders', 'OrderController.store').as('client.order.store')
  Route.get('orders', 'OrderController.show').as('client.order.show')
})
  .middleware('auth')
  .prefix('v1/client')
  .namespace('Client/Order')

Route.group(() => {
  Route.post('', 'RatingController.store').as('client.rating.store')
    .validator('Rate')
})
  .middleware('auth')
  .prefix('v1/client/ratings')
  .namespace('Client/Rating')
