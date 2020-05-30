'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
/**
 * ProductDefaultTransformer class
 *
 * @class ProductDefaultTransformer
 * @constructor
 */
class ProductDefaultTransformer extends BumblebeeTransformer {
  // carrega a imagem do prduto
  static get defaultInclude () {
    return ['image']
  }

  transform (product) {
    return {
      id: product.id,
      name: product.name,
      weekly_sales: product.weekly_sales,
      monthly_sales: product.birth
    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }
}

module.exports = ProductDefaultTransformer
