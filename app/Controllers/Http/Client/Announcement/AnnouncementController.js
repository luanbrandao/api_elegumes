'use strict'

const Announcement = use('App/Models/Announcement')
const AnnouncementTransformer = use('App/Transformers/Announcement/AnnouncementTransformer')
class AnnouncementController {
  async index ({ request, response, transform, pagination }) {
    try {
      const query = Announcement.query()

      const actualDate = new Date()

      query
        .where('active', true)
        .where('expiration', '>=', actualDate)

      const _announcements = await query.paginate(pagination.page, pagination.perpage)
      const announcements = await transform.paginate(_announcements, AnnouncementTransformer)

      return response.status(200).json(announcements)
    } catch (error) {
      // return response.status(400).send({ message: error })
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = AnnouncementController
