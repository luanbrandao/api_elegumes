'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
const AddressTransformer = use('App/Transformers/Address/AddressTransformer')
const ProductTransformer = use('App/Transformers/Product/ProductTransformer')

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

  static get availableInclude () {
    return ['address', 'product']
  }

  transform (company) {
    return {
      id: company.id,
      name: company.name,
      owner: company.owner,
      // falta fazer o cálculo das médias das avaliações
      rating: company.rating ? parseFloat(company.rating).toFixed(2) : 0
    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }

  includeProduct (company) {
    const product = company.products().where('id', company.product_id).first()
    return this.item(product, ProductTransformer)
  }

  includeAddress (company) {
    // relacionamento da company  com o endereço
    return this.item(company.getRelated('address'), AddressTransformer)
  }
}

module.exports = CompanyTransformer
