'use strict'

const Database = use('Database')
const User = use('App/Models/User')
const UserTransformer = use('App/Transformers/Client/UserTransformer')
class ClientRegisterController {
  async register ({ request, response, transform }) {
    const trx = await Database.beginTransaction()

    try {
      const { username, email, password, phone, birth } = request.all()
      const user = await User.create({ username, email, password, phone, birth }, trx)
      await trx.commit()
      return response.status(201).send({ data: await transform.item(user, UserTransformer) })
    } catch (error) {
      await trx.rollback()
      return response.status(400).send({
        message: 'Erro ao realizar cadastro!'
      })
    }
  }
}

module.exports = ClientRegisterController
