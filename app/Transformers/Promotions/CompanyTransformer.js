'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * CompanyTransformer class
 *
 * @class CompanyTransformer
 * @constructor
 */
class CompanyTransformer extends BumblebeeTransformer {
  // carrega a imagem da categoria

  transform (company) {
    return {
      id: company.id,
      name: company.name
    }
  }
}

module.exports = CompanyTransformer
