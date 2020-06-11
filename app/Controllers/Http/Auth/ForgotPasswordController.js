'use strict'

const moment = require('moment')
const User = use('App/Models/User')
const crypto = require('crypto')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')

      const user = await User.findByOrFail('email', email)

      user.token_forgot = crypto.randomBytes(10).toString('hex')
      user.forgot_created_at = new Date()
      await user.save()
      return response.status(200).json({})
    } catch (err) {
      return response.status(err.status).send({ message: 'Algo não deu certo, esse e-mail existe?' })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        response.status(401)
          .send({ error: { message: 'Token de recuperação está expirado' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Algo não deu errado ao reserta sua senha!' } })
    }
  }
}

module.exports = ForgotPasswordController
