'use strict'

/*
|--------------------------------------------------------------------------
| CategoryProductsSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const CategoryProduct = use('App/Models/CategoryProducts')
const Product = use('App/Models/Product')
const Category = use('App/Models/Category')

class CategoryProductsSeeder {
  async run () {
    const product = await Product.all()
    const productJson = product.toJSON()

    const category = await Category.all()
    const categoryJson = category.toJSON()

    await CategoryProduct.create({
      product_id: productJson[0].id,
      category_id: categoryJson[0].id
    })

    await CategoryProduct.create({
      product_id: productJson[1].id,
      category_id: categoryJson[1].id
    })
  }
}

module.exports = CategoryProductsSeeder
