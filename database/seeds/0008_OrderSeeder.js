'use strict'

/*
|--------------------------------------------------------------------------
| OrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Order = use('App/Models/Order')
const User = use('App/Models/User')
const Company = use('App/Models/Company')
class OrderSeeder {
  async run () {
    const users = await User.all()
    const usersJson = users.toJSON()
    const companies = await Company.all()
    const companiesJson = companies.toJSON()

    await Order.create({
      total: 12.00,
      status: 'finished',
      user_id: usersJson[5].id,
      company_id: companiesJson[0].id
    })

    await Order.create({
      total: 5.00,
      status: 'finished',
      user_id: usersJson[6].id,
      company_id: companiesJson[1].id
    })
  }
}

module.exports = OrderSeeder
