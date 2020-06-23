'use strict'

class Address {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      lat: 'number',
      long: 'number',
      cep: 'number'

    }
  }

  get messages () {
    return {
      'lat.number': 'A latitude apenas com números',
      'long.number': 'A longitude apenas com números',
      'cep.number': 'Cep tem que er números'
    }
  }
}

module.exports = Address
