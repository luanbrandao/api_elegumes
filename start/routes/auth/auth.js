'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('confirmation_mail', 'ConfirmationMailController.store').as('auth.confirmation_mail')
  Route.post('passwords', 'ForgotPasswordController.store')
    .validator('Auth/ForgotPassword')

  Route.put('passwords', 'ForgotPasswordController.update').as('teste')

  // Route.get('passwords', ({ view }) => {
  //   return view.render('forgot-password')
  // })
})
  .prefix('v1/auth')
  .namespace('Auth')
