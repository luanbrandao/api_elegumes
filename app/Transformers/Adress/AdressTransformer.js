'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
/**
 * AdressTransformer class
 *
 * @class AdressTransformer
 * @constructor
 */
class AdressTransformer extends BumblebeeTransformer {
  transform (adress) {
    return {
      id: adress.id,
      description: adress.description,
      street: adress.street,
      cep: adress.cep,
      number: adress.birth,
      neighborhood: adress.neighborhood,
      city: adress.city,
      state: adress.state
    }
  }
}

module.exports = AdressTransformer
