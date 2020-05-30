'use strict'

/*
|--------------------------------------------------------------------------
| AdressSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Adress = use('App/Models/Adress')
const User = use('App/Models/User')
class AdressSeeder {
  async run () {
    const user = await User.all()
    const usersJson = user.toJSON()

    // 2 endereços para as lojas
    await Adress.create({
      description: 'Rua do loja x',
      street: 'rua x',
      cep: '01010101',
      neighborhood: 'lugar tão tão distânte',
      city: 'Santarém',
      state: 'Pará'
    })
    await Adress.create({
      description: 'Rua do loja x',
      street: 'rua x',
      cep: '01010101',
      neighborhood: 'lugar tão tão distânte',
      city: 'Santarém',
      state: 'Pará'
    })

    await Adress.create({
      description: 'Rua do luan',
      street: 'casa do luan',
      cep: '01010101',
      neighborhood: 'lugar tão tão distante',
      city: 'Santarém',
      state: 'Pará',
      user_id: usersJson[5].id
    })

    await Adress.create({
      description: 'Rua do admir',
      street: 'casa  do ademir',
      cep: '01010101',
      neighborhood: 'lugar tão tão distante',
      city: 'Santarém',
      state: 'Pará',
      user_id: usersJson[6].id
    })
  }
}

module.exports = AdressSeeder
