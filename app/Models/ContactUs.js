'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

// se colocar ContactUs da erro, por isso está sem o s no final
class ContactU extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = ContactU
