'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
const SimpleProductDefaultTransformer = use('App/Transformers/Product/SimpleProductDefaultTransformer')
/**
 * ProductTansformer class
 *
 * @class ProductTansformer
 * @constructor
 */
class ProductTransformer extends BumblebeeTransformer {
  // carrega a imagem do prduto
  static get defaultInclude () {
    return ['image', 'productDefault']
  }

  // static get availableInclude () {
  //   return ['productDefault']
  // }

  transform (product) {
    product = product.toJSON()
    return {
      id: product.id,
      price: product.price,
      weight: product.weight,
      active_promotion: product.active_promotion,
      price_promotion: product.price_promotion,
      technical_description: product.technical_description,
      type: product.type

    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }

  includeProductDefault (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('productDefault'), SimpleProductDefaultTransformer)
  }
}

module.exports = ProductTransformer
