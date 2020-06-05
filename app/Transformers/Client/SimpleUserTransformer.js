'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * SimpleUserTransformer class
 *
 * @class SimpleUserTransformer
 * @constructor
 */
class SimpleUserTransformer extends BumblebeeTransformer {
  transform (user) {
    return {
      id: user.id,
      username: user.username
    }
  }
}

module.exports = SimpleUserTransformer
