'use strict'

class ForgotPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email'
    }
  }

  get messages () {
    return {
      'email.required': 'O e-mail é obrigatório!'
    }
  }
}

module.exports = ForgotPassword
