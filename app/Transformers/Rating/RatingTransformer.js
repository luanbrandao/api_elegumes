'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const SimpleUserTransformer = use('App/Transformers/Client/SimpleUserTransformer')

/**
 * RatingTransformer class
 *
 * @class RatingTransformer
 * @constructor
 */
class RatingTransformer extends BumblebeeTransformer {
  // static get defaultInclude () {
  //   return ['user']
  // }

  static get availableInclude () {
    return ['user']
  }

  transform (rating) {
    return {
      id: rating.id,
      rate: rating.rate,
      comment: rating.comment
    }
  }

  includeUser (rating) {
    // relacionamento da rating com user
    return this.item(rating.getRelated('user'), SimpleUserTransformer)
  }
}

module.exports = RatingTransformer
