'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ConfirmationMail extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', 'MailHook.register')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = ConfirmationMail
