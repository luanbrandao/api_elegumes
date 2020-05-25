'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await Factory.model('App/Models/User').createMany(5)

    await User.create({
      username: 'Luan Brandão',
      phone: '123123123123',
      email: 'luan@gmail.com',
      password: 'asdfasdf',
      confirmation_mail: true
    })

    await User.create({
      username: 'Ademir',
      phone: '123123123123',
      email: 'ademir@gmail.com',
      password: 'asdfasdf',
      confirmation_mail: true
    })

    await User.create({
      username: 'Vitor',
      phone: '123123123123',
      email: 'vitor@gmail.com',
      password: 'asdfasdf',
      confirmation_mail: true
    })
  }
}

module.exports = UserSeeder
