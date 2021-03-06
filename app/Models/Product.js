'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  image () {
    return this.belongsTo('App/Models/Image')
  }

  // Relacionamente o entre produtos e imagens
  // Galeria de fotos do produto
  images () {
    return this.belongsToMany('App/Models/Image')
  }

  default () {
    return this.belongsTo('App/Models/ProductDefault', 'product_default_id', 'id')
  }

  company () {
    return this.belongsTo('App/Models/Company', 'company_id', 'id')
  }

  productDefault () {
    return this.belongsTo('App/Models/ProductDefault', 'product_default_id', 'id')
  }
}

module.exports = Product
