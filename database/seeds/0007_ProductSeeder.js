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

    /**
     *  empresa 1
    */
    await Product.create({
      price: 1.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'amount',
      description: 'couve',
      technical_description: 'descrição técnica',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[0].id,
      active: true
    })

    await Product.create({
      price: 1.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'amount',
      description: 'cheiro verde',
      technical_description: 'da cor verde',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[1].id,
      active: true
    })

    await Product.create({
      price: 6.30,
      active_promotion: true,
      price_promotion: 6.00,
      type: 'weight',
      weight: 1000,
      description: 'tomate',
      technical_description: 'da cor verde',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[2].id,
      active: true,
      image_id: '123556d1-b078-4711-7bb7-508491cb8123'
    })

    await Product.create({
      price: 3.75,
      active_promotion: false,
      price_promotion: 0,
      type: 'amount',
      description: 'Abóbora',
      technical_description: 'da cor verde',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[3].id,
      active: true
    })

    await Product.create({
      price: 6.25,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Pimentão',
      technical_description: 'da cor verde',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[4].id,
      active: true
    })

    await Product.create({
      price: 5.80,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Cenoura',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[5].id,
      active: true
    })

    await Product.create({
      price: 7.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Batata',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[6].id,
      active: true
    })
    await Product.create({
      price: 3.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Mandioca',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[7].id,
      active: true
    })
    await Product.create({
      price: 6.10,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 200,
      description: 'Hortelã',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[8].id,
      active: true
    })

    await Product.create({
      price: 2.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'amount',
      description: 'Pimenta do Reino',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[9].id,
      active: true
    })

    await Product.create({
      price: 3.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 100,
      description: 'Alho Poró',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[10].id,
      active: true
    })

    await Product.create({
      price: 5.70,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Farinha de Trigo',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[11].id,
      active: true
    })
    await Product.create({
      price: 5.20,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Farinha',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[12].id,
      active: true
    })
    await Product.create({
      price: 4.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Acúcar Mascavo',
      technical_description: '',
      company_id: companiesJson[0].id,
      product_default_id: productDefaultJson[13].id,
      active: true
    })
    /**
     *  empresa 2
    */
    await Product.create({
      price: 1.00,
      active_promotion: true,
      price_promotion: 0.90,
      type: 'amount',
      description: 'couve',
      technical_description: 'descrição técnica',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[0].id,
      active: true
    })

    await Product.create({
      price: 1.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'amount',
      description: 'cheiro verde',
      technical_description: 'da cor verde',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[1].id,
      active: true
    })

    await Product.create({
      price: 6.45,
      active_promotion: true,
      price_promotion: 6.20,
      type: 'weight',
      weight: 1000,
      description: 'tomate',
      technical_description: 'da cor verde',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[2].id,
      active: true
    })

    await Product.create({
      price: 3.45,
      active_promotion: true,
      price_promotion: 3.00,
      type: 'amount',
      description: 'Abóbora',
      technical_description: 'da cor verde',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[3].id,
      active: true
    })

    await Product.create({
      price: 6.45,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Pimentão',
      technical_description: 'da cor verde',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[4].id,
      active: true
    })

    await Product.create({
      price: 5.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Cenoura',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[5].id,
      active: true
    })

    await Product.create({
      price: 7.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Batata',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[6].id,
      active: true
    })
    await Product.create({
      price: 3.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Mandioca',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[7].id,
      active: true
    })
    await Product.create({
      price: 6.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 200,
      description: 'Hortelã',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[8].id,
      active: true
    })

    await Product.create({
      price: 2.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'amount',
      description: 'Pimenta do Reino',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[9].id,
      active: true
    })

    await Product.create({
      price: 3.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 100,
      description: 'Alho Poró',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[10].id,
      active: true
    })

    await Product.create({
      price: 5.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Farinha de Trigo',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[11].id,
      active: true
    })
    await Product.create({
      price: 5.00,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Farinha',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[12].id,
      active: true
    })
    await Product.create({
      price: 4.50,
      active_promotion: false,
      price_promotion: 0,
      type: 'weight',
      weight: 1000,
      description: 'Acúcar Mascavo',
      technical_description: '',
      company_id: companiesJson[1].id,
      product_default_id: productDefaultJson[13].id,
      active: true

    })
  }
}

module.exports = ProductSeeder
