'use strict'

class Register {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required',
      // unique:users,email, passa a tabela e a coluna
      email: 'required|email|unique:users,email',
      password: 'required|confirmed',
      phone: 'required',
      birth: 'date'

    }
  }

  get messages () {
    return {
      'username.required': 'O nome é obrigatório!',
      'email.required': 'O e-mail é obrigatório!',
      'email.email': 'E-mail inválido!',
      'email.unique': 'Este e-mail já está em uso!',
      'password.required': 'A senha é obrigatória!',
      'password.confirmed': 'A senhas não são iguais!',
      'phone.required': 'O telefone é obrigatório!',
      'birth.date': 'Formato da data inválido!'
    }
  }
}

module.exports = Register
