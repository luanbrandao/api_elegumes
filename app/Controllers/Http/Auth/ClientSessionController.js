'use strict'
const User = use('App/Models/User')

class ClientSessionController {
  async store ({ request, response, auth }) {
    try {
      const { email, password } = request.all()

      const user = await User.findByOrFail('email', email)

      if (!user.confirmation_mail) {
        return response.status(403).send({ error: 'Confirme seu e-mail!' })
      }

      /**
       * com o método withRefreshToken estava dando erros nos testes
        const data = await auth.withRefreshToken().attempt(email, password)
      */
      const data = await auth.attempt(email, password)
      return response.status(200).send({ data: data })
    } catch (error) {
      return response.status(400).send({ error: 'Falha na autenticação, tente novamente!' })
    }
  }
}

module.exports = ClientSessionController
