'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
/**
 * SimpleProductDefaultTransformer class
 *
 * @class SimpleProductDefaultTransformer
 * @constructor
 */
class SimpleProductDefaultTransformer extends BumblebeeTransformer {
  // carrega a imagem do prduto
  static get defaultInclude () {
    return ['image']
  }

  transform (product) {
    product = product.toJSON()
    return {
      id: product.id,
      name: product.name
    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }
}

module.exports = SimpleProductDefaultTransformer
