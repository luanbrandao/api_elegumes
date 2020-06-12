'use strict'

class ContactUs {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      message: 'required'

    }
  }

  get messages () {
    return {
      'title.required': 'O título é obrigatório!',
      'message.required': 'A mensagem é obrigatória!'
    }
  }
}

module.exports = ContactUs
