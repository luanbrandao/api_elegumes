'use strict'

// const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const BumblebeeTransformer = use('Bumblebee/Transformer')
/**
 * ImageProductTransformer class
 *
 * @class ImageProductTransformer
 * @constructor
 */
class ImageProductTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (image) {
    // toJSON
    image = image.toJSON()
    return {
      id: image.id,
      url: image.url
    }
  }
}

module.exports = ImageProductTransformer
