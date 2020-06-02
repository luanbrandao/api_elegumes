'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  image () {
    return this.belongsTo('App/Models/Image')
  }

  productDefault () {
    return this.hasMany('App/Models/ProductDefault')
  }
}

module.exports = Category
