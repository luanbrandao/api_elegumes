'use strict'
const ContactUs = use('App/Models/ContactUs')
const ContactUsTransformer = use('App/Transformers/ContactUs/ContactUsTransformer')

class ContactUsController {
  async store ({ params, request, response, transform, auth }) {
    const { title, message } = request.all()
    const client = await auth.getUser()

    try {
      const _contactUs = await ContactUs.create({
        title,
        message,
        user_id: client.id
      })

      const contactUs = await transform.item(_contactUs, ContactUsTransformer)
      return response.json({ data: { contactUs } })
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível realizar seu contato!'
        // message: error
      })
    }
  }
}

module.exports = ContactUsController
