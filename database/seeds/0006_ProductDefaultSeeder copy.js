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

    // Verduras
    await ProductDefault.create({
      name: 'Couve',
      active: true,
      weekly_sales: 63,
      monthly_sales: 74,
      category_id: categoryJson[0].id
    })

    await ProductDefault.create({
      name: 'Cheiro Verde',
      active: true,
      weekly_sales: 63,
      monthly_sales: 74,
      category_id: categoryJson[0].id
    })

    // Legumes
    await ProductDefault.create({
      name: 'Tomate',
      active: true,
      weekly_sales: 23,
      monthly_sales: 44,
      category_id: categoryJson[1].id
    })

    await ProductDefault.create({
      name: 'Abóbora',
      active: true,
      weekly_sales: 13,
      monthly_sales: 24,
      category_id: categoryJson[1].id
    })
    await ProductDefault.create({
      name: 'Pimentão',
      active: true,
      weekly_sales: 23,
      monthly_sales: 84,
      category_id: categoryJson[1].id
    })
    // Raízes
    await ProductDefault.create({
      name: 'Cenoura',
      active: true,
      weekly_sales: 93,
      monthly_sales: 114,
      category_id: categoryJson[2].id
    })
    await ProductDefault.create({
      name: 'Batata',
      active: true,
      weekly_sales: 53,
      monthly_sales: 74,
      category_id: categoryJson[2].id
    })
    await ProductDefault.create({
      name: 'Mandioca',
      active: true,
      weekly_sales: 43,
      monthly_sales: 64,
      category_id: categoryJson[2].id
    })

    // Temperos
    await ProductDefault.create({
      name: 'Hortelã',
      active: true,
      weekly_sales: 23,
      monthly_sales: 34,
      category_id: categoryJson[3].id
    })
    await ProductDefault.create({
      name: 'Pimenta do Reino',
      active: true,
      weekly_sales: 43,
      monthly_sales: 84,
      category_id: categoryJson[3].id
    })
    await ProductDefault.create({
      name: 'Alho Poró',
      active: true,
      weekly_sales: 13,
      monthly_sales: 44,
      category_id: categoryJson[3].id
    })

    // Outros
    await ProductDefault.create({
      name: 'Farinha de Trigo',
      active: true,
      weekly_sales: 28,
      monthly_sales: 48,
      category_id: categoryJson[4].id
    })

    await ProductDefault.create({
      name: 'Farinha',
      active: true,
      weekly_sales: 13,
      monthly_sales: 24,
      category_id: categoryJson[4].id
    })

    await ProductDefault.create({
      name: 'Acúcar Mascavo',
      active: true,
      weekly_sales: 3,
      monthly_sales: 14,
      category_id: categoryJson[4].id
    })
  }
}

module.exports = ProductDefaultSeeder
