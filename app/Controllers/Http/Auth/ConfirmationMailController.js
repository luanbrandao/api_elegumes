'use strict'

const ConfirmationMail = use('App/Models/ConfirmationMail')
// const User = use('App/Models/User')
const Database = use('Database')

class ConfirmationMailController {
  async store ({ request, response }) {
    const token = request.input('token')

    if (!token) {
      return response.status(400).send({
        message: 'Não foi possível confirmar seu e-mail, tente novamente!'
      })
    }

    const trx = await Database.beginTransaction()

    try {
      const confirmationMail = await ConfirmationMail.findByOrFail('token', token)

      await confirmationMail
        .user()
        .update({ confirmation_mail: true, confirmation_mail_created_at: new Date() }, trx)

      confirmationMail.delete()

      trx.commit()
      return response.status(200).send({
        message: 'Sua conta foi ativada com sucesso!'
        // message: user
      })
    } catch (error) {
      await trx.rollback()
      return response.status(400).send({
        message: 'Não foi possível confirmar seu e-mail, tente novamente!'
      })
    }

    // try {
    //   const { username, email, password, phone, birth } = request.all()
    //   const user = await User.create({ username, email, password, phone, birth }, trx)

    //   const token = await strRandom()

    //   await user.confirmationMail().create({ email, token, username }, trx)

    //   await trx.commit()
    //   return response.status(201).send({ data: await transform.item(user, UserTransformer) })
    // } catch (error) {
    //   await trx.rollback()
    //   return response.status(400).send({
    //     message: error
    //   })
    // }
  }
}

module.exports = ConfirmationMailController
