'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
/**
 * SimpleCompanyTransformer class
 *
 * @class SimpleCompanyTransformer
 * @constructor
 */
class SimpleCompanyTransformer extends BumblebeeTransformer {
  // carrega a imagem da categoria
  static get defaultInclude () {
    return ['image']
  }

  transform (company) {
    return {
      id: company.id,
      name: company.name
    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }
}

module.exports = SimpleCompanyTransformer
