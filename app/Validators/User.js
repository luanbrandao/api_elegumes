'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'email|unique:users',
      password: 'confirmed'
    }
  }

  get messages () {
    return {
      'email.email': 'E-mail inválido!',
      'email.unique': 'Este e-mail já está em uso!',
      'password.confirmed': 'A senhas não são iguais!'
    }
  }
}

module.exports = User
