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

Route.group(() => {
  Route.post('', 'ContactUsController.store').as('client.contact.store')
    .validator('ContactUs')
})
  .middleware('auth')
  .prefix('v1/client/contacts')
  .namespace('Client/ContactUs')

Route.group(() => {
  Route.put('profile', 'ClientController.update').as('client.profile.update')
    .validator('User')
})
  .middleware('auth')
  .prefix('v1/client')
  .namespace('Client/Client')

Route.group(() => {
  Route.get('addresses', 'AddressController.index').as('client.address.index')
  Route.post('addresses', 'AddressController.store').as('client.address.post')
    .validator('Address')
  Route.put('addresses/:id', 'AddressController.update').as('client.address.put')
    .validator('Address')
})
  .middleware('auth')
  .prefix('v1/client')
  .namespace('Client/Address')
