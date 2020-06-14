'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
/**
 * AdressTransformer class
 *
 * @class AdressTransformer
 * @constructor
 */
class AddressTransformer extends BumblebeeTransformer {
  transform (address) {
    return {
      id: address.id,
      description: address.description,
      street: address.street,
      cep: address.cep,
      number: address.birth,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      lat: address.lat,
      long: address.long
    }
  }
}

module.exports = AddressTransformer
