'use strict'
const Hash = use('Hash')
const User = use('App/Models/User')
const UserTransformer = use('App/Transformers/Client/UserTransformer')
class ClientController {
  async update ({ request, response, transform, auth }) {
    try {
      const client = await auth.getUser()

      const user = await User.findOrFail(client.id)
      const oldPassword = request.input('oldPassword')
      const { password } = request.all('oldPassword')

      // const user =

      if (oldPassword) {
        const isSame = await Hash.verify(oldPassword, client.password)

        if (!isSame) {
          return response.status(400).send({
            // message: 'Não foi possível atualizar seus dados'
            message: 'Senhas invalida'
          })
        }

        user.merge({ password: password })
      }

      const data = request.only([
        'username', 'phone', 'birth'
      ])

      user.merge(data)
      await user.save()

      return response.status(201).send({ data: await transform.item(user, UserTransformer) })
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível atualizar seus dados'
      })
    }
  }
}

module.exports = ClientController
