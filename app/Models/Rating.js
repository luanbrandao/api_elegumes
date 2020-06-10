'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rating extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', 'RatingHook.updateRatingCompany')
  }

  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }

  company () {
    return this.belongsTo('App/Models/Company', 'company_id', 'id')
  }
}

module.exports = Rating
