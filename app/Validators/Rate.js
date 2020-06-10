'use strict'

class Rate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      company: 'required',
      rate: 'required'

    }
  }

  get messages () {
    return {
      'company.required': 'A loja é obrigatória!',
      'rate.required': 'A nota da avaliação é obrigatória!'
    }
  }
}

module.exports = Rate
