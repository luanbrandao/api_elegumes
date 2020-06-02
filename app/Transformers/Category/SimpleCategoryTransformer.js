'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
const SimpleProductDefaultTransformer = use('App/Transformers/Product/SimpleProductDefaultTransformer')
/**
 * SimpleCategoryTransformer class
 *
 * @class SimpleCategoryTransformer
 * @constructor
 */
class SimpleCategoryTransformer extends BumblebeeTransformer {
  // carrega a imagem da categoria
  static get defaultInclude () {
    // return ['image']
    return ['image', 'productDefault']
  }

  transform (company) {
    return {
      id: company.id,
      title: company.title
    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }

  includeProductDefault (company) {
    return this.collection(company.getRelated('productDefault'), SimpleProductDefaultTransformer)
  }
}

module.exports = SimpleCategoryTransformer
