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
      title: 'Verdura',
      description: 'descricao da categoria',
      active: true
    })

    await Category.create({
      title: 'Legume',
      description: 'descricao da categoria',
      active: true
    })
    await Category.create({
      title: 'Categoria x',
      description: 'descricao da categoria',
      active: true
    })
  }
}

module.exports = CategorySeeder
