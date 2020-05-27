'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('confirmation_mail', 'ConfirmationMailController.store').as('auth.confirmation_mail')
})
  .prefix('v1/auth')
  .namespace('Auth')
