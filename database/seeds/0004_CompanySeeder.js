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
const Adress = use('App/Models/Adress')
const Image = use('App/Models/Image')
class CompanySeeder {
  async run () {
    const image = await Image.all()
    const imageJson = image.toJSON()
    const adress = await Adress.all()
    const adressJson = adress.toJSON()

    await Company.create({
      name: 'Frutlândia da Prainha',
      owner: 'senhor frutlandio',
      primary_phone: '1111111111',
      secundary_phone: '2222222222222',
      rating: 4,
      adress_id: adressJson[0].id,
      image_id: imageJson[14].id,
      active: true
    })

    await Company.create({
      name: 'Frutaria da Maria',
      owner: 'dona maria',
      primary_phone: '1111111111',
      secundary_phone: '2222222222222',
      rating: 5,
      adress_id: adressJson[1].id,
      image_id: imageJson[15].id,
      active: true
    })
  }
}

module.exports = CompanySeeder
