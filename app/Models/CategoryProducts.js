'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CategoryProducts extends Model {
  // informa que a tabela não tem o campo timesTamp
  static get traits () {
    return ['App/Models/Traits/NoTimestamp']
  }
}

module.exports = CategoryProducts
