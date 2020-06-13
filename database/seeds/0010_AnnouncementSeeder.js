'use strict'

/*
|--------------------------------------------------------------------------
| AnnouncementSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Announcement = use('App/Models/Announcement')
const Image = use('App/Models/Image')
class AnnouncementSeeder {
  async run () {
    const image = await Image.all()
    const imageJson = image.toJSON()

    await Announcement.create({
      title: 'Lojão de Santarém',
      description: 'semana se ofertas do cr supermercados.',
      active: true,
      url: 'lojax@sdf.com',
      image_id: imageJson[17].id,
      expiration: new Date()

    })

    await Announcement.create({
      title: 'Atacadista Stm',
      description: 'chuva de preços baixos',
      active: true,
      url: 'lojax2@sdf.com',
      image_id: imageJson[18].id,
      expiration: new Date()

    })
  }
}

module.exports = AnnouncementSeeder
