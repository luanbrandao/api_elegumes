'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Product = use('App/Models/Product')
const Company = use('App/Models/Company')
const ProductDefault = use('App/Models/ProductDefault')

class ProductSeeder {
  async run () {
    const companies = await Company.all()
    const companiesJson = companies.toJSON()

    const productDefault = await ProductDefault.all()
    const productDefaultJson = productDefault.toJSON()

    await Product.create({
      price: 3.45,
      active_promotion: true,
      price_promotion: 3.00,
      type: 'amount',
      description: 'cebola que faz chorar',
      technical_description: 'cebolinnha',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[0].id,
      active: true
    })

    await Product.create({
      price: 1.45,
      active_promotion: true,
      price_promotion: 2.00,
      type: 'amount',
      description: 'muito bom',
      technical_description: 'da cor verde',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[1].id,
      active: true
    })

    await Product.create({
      price: 1.45,
      active_promotion: true,
      price_promotion: 2.00,
      type: 'amount',
      description: 'muito bom',
      technical_description: 'da cor verde',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[2].id,
      active: true
    })

    await Product.create({
      price: 1.45,
      active_promotion: true,
      price_promotion: 2.00,
      type: 'amount',
      description: 'muito bom',
      technical_description: 'da cor verde',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[3].id,
      active: true
    })
  }
}

module.exports = ProductSeeder
