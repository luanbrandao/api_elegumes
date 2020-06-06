'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
const AddressTransformer = use('App/Transformers/Address/AddressTransformer')
/**
 * DetailsCompanyTransformer class
 *
 * @class DetailsCompanyTransformer
 * @constructor
 */
class DetailsCompanyTransformer extends BumblebeeTransformer {
  // carrega a imagem da categoria
  static get defaultInclude () {
    // return ['image']
    return ['image']
  }

  static get availableInclude () {
    return ['address']
  }

  transform (company) {
    return {
      id: company.id,
      name: company.name,
      owner: company.owner,
      primary_phone: company.primary_phone,
      secundary_phone: company.secundary_phone,
      // falta fazer o cálculo das médias das avaliações
      rating: company.rating | 0
    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }

  includeAddress (company) {
    // relacionamento da company  com o endereço
    return this.item(company.getRelated('address'), AddressTransformer)
  }
}

module.exports = DetailsCompanyTransformer
