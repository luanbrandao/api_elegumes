'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Image/SimpleImageTransformer')
/**
 * AnnouncementTransformer class
 *
 * @class AnnouncementTransformer
 * @constructor
 */
class AnnouncementTransformer extends BumblebeeTransformer {
  static get defaultInclude () {
    return ['image']
  }

  transform (announcement) {
    return {
      id: announcement.id,
      title: announcement.title,
      description: announcement.description,
      url: announcement.url
    }
  }

  includeImage (announcement) {
    // relacionamento do user  com a img
    return this.item(announcement.getRelated('image'), ImageTransformer)
  }
}

module.exports = AnnouncementTransformer
