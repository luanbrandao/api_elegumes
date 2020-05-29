'use strict'

/*
|--------------------------------------------------------------------------
| ProductDefaultSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const ProductDefault = use('App/Models/ProductDefault')
const Category = use('App/Models/Category')

class ProductDefaultSeeder {
  async run () {
    const category = await Category.all()
    const categoryJson = category.toJSON()

    await ProductDefault.create({
      name: 'Cebola',
      active: true,
      weekly_sales: 23,
      monthly_sales: 44,
      category_id: categoryJson[0].id
    })

    await ProductDefault.create({
      name: 'limão',
      active: true,
      weekly_sales: 13,
      monthly_sales: 24,
      category_id: categoryJson[0].id
    })

    await ProductDefault.create({
      name: 'Couve',
      active: true,
      weekly_sales: 63,
      monthly_sales: 74,
      category_id: categoryJson[0].id
    })

    await ProductDefault.create({
      name: 'Cenoura',
      active: true,
      weekly_sales: 113,
      monthly_sales: 94,
      category_id: categoryJson[1].id
    })
  }
}

module.exports = ProductDefaultSeeder
