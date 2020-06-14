'use strict'

class Address {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      lat: 'required',
      long: 'required'

    }
  }

  get messages () {
    return {
      'lat.required': 'A latitude é obrigatória!',
      'long.required': 'A longitude é obrigatória!'
    }
  }
}

module.exports = Address
