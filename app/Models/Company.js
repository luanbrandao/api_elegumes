'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {
  image () {
    return this.belongsTo('App/Models/Image')
  }

  address () {
    return this.belongsTo('App/Models/Address')
  }

  comments () {
    return this.hasMany('App/Models/Rating')
  }

  products () {
    return this.hasMany('App/Models/Product')
  }

  ratings () {
    return this.hasMany('App/Models/Rating')
  }

  // trata antes de salvar e apresetar os dados
  // formata os valores para o padrão do MYSQL
  // informa pro adonis os campos do tipo date
  static get dates () {
    return ['created_at', 'updated_at', 'birth', 'confirmation_mail_created_at']
  }
}

module.exports = Company
