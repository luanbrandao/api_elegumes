'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
const AdressTransformer = use('App/Transformers/Adress/AdressTransformer')
/**
 * CompanyTransformer class
 *
 * @class CompanyTransformer
 * @constructor
 */
class CompanyTransformer extends BumblebeeTransformer {
  // carrega a imagem da categoria
  static get defaultInclude () {
    // return ['image']
    return ['image', 'adress']
  }

  transform (company) {
    console.log(company)
    return {
      id: company.id,
      name: company.name,
      owner: company.owner,
      // falta fazer o cálculo das médias das avaliações
      rating: company.rating | 0
    }
  }

  includeImage (company) {
    // relacionamento da company com a img
    return this.item(company.getRelated('image'), ImageTransformer)
  }

  includeAdress (company) {
    // relacionamento da company  com o endereço
    return this.item(company.getRelated('adress'), AdressTransformer)
  }
}

module.exports = CompanyTransformer
