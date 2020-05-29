'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/ImageTransformer')
/**
 * CompanyTransformer class
 *
 * @class CompanyTransformer
 * @constructor
 */
class CompanyTransformer extends BumblebeeTransformer {
  // carrega a imagem da categoria
  static get defaultInclude () {
    return ['image']
  }

  transform (model) {
    console.log(model)
    return {
      id: model.id,
      name: model.name,
      owner: model.owner,
      // falta fazer o cálculo das médias das avaliações
      rating: model.rating | 0
    }
  }

  includeImage (model) {
    // relacionamento do model category com a img
    return this.item(model.getRelated('image'), ImageTransformer)
  }
}

module.exports = CompanyTransformer
