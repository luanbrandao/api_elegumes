'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('register', 'ClientRegisterController.register').as('auth.client.register')
    .validator('Auth/Register')
})
  .prefix('v1/auth/client')
  .namespace('Auth')
