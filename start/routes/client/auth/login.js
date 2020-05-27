'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('login', 'ClientSessionController.store').as('auth.client.login')
    .validator('Auth/Login')
})
  .prefix('v1/auth/client')
  .namespace('Auth')
