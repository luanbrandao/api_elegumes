'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Category = use('App/Models/Category')

class CategorySeeder {
  async run () {
    await Category.create({
      title: 'Verduras',
      description: 'frescos',
      active: true
    })

    await Category.create({
      title: 'Legumes',
      description: 'Ótima qualidade',
      active: true
    })
    await Category.create({
      title: 'Raízes',
      description: 'limpinhas',
      active: true
    })

    await Category.create({
      title: 'Temperos',
      description: 'cheirosos',
      active: true
    })

    await Category.create({
      title: 'Outros',
      description: 'muito mais',
      active: true
    })
  }
}

module.exports = CategorySeeder
