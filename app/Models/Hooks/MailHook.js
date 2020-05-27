'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

const Mail = use('Mail')
const MailHook = exports = module.exports = {}

MailHook.register = async (confirmationMail) => {
  const { email, token, username } = confirmationMail

  await Mail.send(
    ['emails.confirmation_mail'],
    { username, link: `${Env.get('URL_CONFIRMARION_MAIL')}?token=${token}` },
    message => {
      message
        .to(email)
        .from('elegume@gmil.com', ' Luan | Adonis')
        .subject('Confirmação de E-mail')
    }
  )
}
