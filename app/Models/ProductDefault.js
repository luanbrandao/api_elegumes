'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductDefault extends Model {
  category () {
    return this.belongsTo('App/Models/Category')
  }

  image () {
    return this.belongsTo('App/Models/Image')
  }
}

module.exports = ProductDefault
