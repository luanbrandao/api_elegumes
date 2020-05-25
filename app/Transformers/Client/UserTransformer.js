'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
// const ImageTransformer = use('App/Transformers/Admin/ImageTransformer')
/**
 * UserTransformer class
 *
 * @class UserTransformer
 * @constructor
 */
class UserTransformer extends BumblebeeTransformer {
  // static get defaultInclude () {
  //   return ['image']
  // }

  transform (user) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      birth: user.birth
    }
  }

  // includeImage (user) {
  //   // relacionamento do user  com a img
  //   return this.item(user.getRelated('image'), ImageTransformer)
  // }
}

module.exports = UserTransformer
