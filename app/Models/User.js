'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
    this.addHook('beforeSave', 'MailHook.register')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  image () {
    return this.belongsTo('App/Models/Image')
  }

  // trata antes de salvar e apresetar os dados
  // formata os valores para o padrão do MYSQL
  // informa pro adonis os campos do tipo date
  static get dates () {
    return ['created_at', 'updated_at', 'birth', 'confirmation_mail_created_at']
  }

  static get hidden () {
    return ['password', 'created_at', 'updated_at']
  }
}

module.exports = User
