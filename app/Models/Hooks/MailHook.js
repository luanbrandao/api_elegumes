'use strict'

const Mail = use('Mail')
const MailHook = exports = module.exports = {}

MailHook.register = async (confirmationMail) => {
  const { email, token, username } = confirmationMail

  await Mail.send(
    ['emails.confirmation_mail'],
    { username, link: `alegumes@gmail.com/register?token=${token}` },
    message => {
      message
        .to(email)
        .from('elegume@gmil.com', ' Luan | Adonis')
        .subject('Confirmação de E-mail')
    }
  )
}
