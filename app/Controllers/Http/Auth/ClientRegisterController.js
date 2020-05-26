'use strict'

const Database = use('Database')
const User = use('App/Models/User')
const UserTransformer = use('App/Transformers/Client/UserTransformer')
const { strRandom } = use('App/Helpers/index.js')
class ClientRegisterController {
  async register ({ request, response, transform }) {
    const trx = await Database.beginTransaction()

    try {
      const { username, email, password, phone, birth } = request.all()
      const user = await User.create({ username, email, password, phone, birth }, trx)

      const token = await strRandom()

      await user.confirmationMail().create({ email, token, username }, trx)

      await trx.commit()
      return response.status(201).send({ data: await transform.item(user, UserTransformer) })
    } catch (error) {
      await trx.rollback()
      return response.status(400).send({
        message: error
      })
    }
  }
}

module.exports = ClientRegisterController
