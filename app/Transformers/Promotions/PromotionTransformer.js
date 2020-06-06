'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
const ProductDefaultTransformer = use('App/Transformers/Promotions/ProductDefaultTransformer')
const CompanyTransformer = use('App/Transformers/Promotions/CompanyTransformer')
/**
 * PromotionTransformer class
 *
 * @class PromotionTransformer
 * @constructor
 */
class PromotionTransformer extends BumblebeeTransformer {
  // carrega a imagem do prduto
  static get defaultInclude () {
    return ['image']
  }

  static get availableInclude () {
    return ['images', 'default', 'company']
  }

  transform (product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      active_promotion: product.active_promotion,
      price_promotion: product.price_promotion,
      type: product.type,
      weight: product.weight
    }
  }

  // galeria de imagens
  includeImages (product) {
    return this.collection(product.getRelated('images'), ImageTransformer)
  }

  includeImage (product) {
    return this.item(product.getRelated('image'), ImageTransformer)
  }

  includeDefault (product) {
    return this.item(product.getRelated('default'), ProductDefaultTransformer)
  }

  includeCompany (product) {
    return this.item(product.getRelated('company'), CompanyTransformer)
  }
}
module.exports = PromotionTransformer
