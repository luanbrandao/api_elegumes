'use strict'

/*
|--------------------------------------------------------------------------
| CompanySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Company = use('App/Models/Company')

class CompanySeeder {
  async run () {
    await Company.create({
      name: 'CR',
      owner: 'dono 1',
      active: true
    })

    await Company.create({
      name: 'Feira da Uva',
      owner: 'dono 2',
      active: true
    })
  }
}

module.exports = CompanySeeder
