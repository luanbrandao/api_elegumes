'use strict'

/*
|--------------------------------------------------------------------------
| RatingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Rating = use('App/Models/Rating')
const User = use('App/Models/User')
const Company = use('App/Models/Company')
class RatingSeeder {
  async run () {
    const users = await User.all()
    const usersJson = users.toJSON()
    const companies = await Company.all()
    const companiesJson = companies.toJSON()

    await Rating.create({
      user_id: usersJson[5].id,
      company_id: companiesJson[0].id,
      rate: 4.5,
      comment: 'tudo tava muito caro'
    })
    await Rating.create({
      user_id: usersJson[6].id,
      company_id: companiesJson[1].id,
      rate: 3.5,
      comment: 'tudo muito caro'
    })
  }
}

module.exports = RatingSeeder
