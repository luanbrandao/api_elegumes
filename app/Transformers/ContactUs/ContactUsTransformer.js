'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
/**
 * ContactUsTransformer class
 *
 * @class ContactUsTransformer
 * @constructor
 */
class ContactUsTransformer extends BumblebeeTransformer {
  transform (contact) {
    return {
      id: contact.id,
      title: contact.title,
      message: contact.message
    }
  }
}

module.exports = ContactUsTransformer
