'use strict'

/*
|--------------------------------------------------------------------------
| imageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Image = use('App/Models/Image')

class imageSeeder {
  async run () {
    await Image.create({
      id: '12349343-aa8c-4356-bfd4-602f8214c3b7',
      path: 'tomate.jpeg',
      size: 73533,
      original_name: 'tomate.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123b957d-c122-47f6-874b-3698bf53da7c',
      path: 'cheiro-verde.jpeg',
      size: 33441,
      original_name: 'cheiro-verde.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '1236f5b8-fa08-4953-b219-dcd95527d4ab',
      path: 'abobora.jpeg',
      size: 54662,
      original_name: 'abobora.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '1237a908-abad-49ff-9ef7-72299a5d0439',
      path: 'cenoura.jpeg',
      size: 102155,
      original_name: 'cenoura.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '12330374-77d1-42cf-a550-2a95c4c8da7e',
      path: 'batata.jpeg',
      size: 9887,
      original_name: 'batata.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '12230375-77d1-42cf-a550-2a95c4c8da7e',
      path: 'cebora.jpeg',
      size: 85259,
      original_name: 'cebora.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123d32a9-4f6c-4987-8cde-22558dbde585',
      path: 'couve.jpeg',
      size: 72599,
      original_name: 'couve.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123535c3-f769-4693-9e10-dcccce0fb275',
      path: 'pipino.jpeg',
      size: 219975,
      original_name: 'pipino.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123934ae-4cc0-4621-8a12-f41a4607e6a4',
      path: 'hotelan.jpeg',
      size: 48249,
      original_name: 'hotelan.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '12360c2d-598c-426e-8030-683e2bf131ed',
      path: 'acucar Mascavo.jpeg',
      size: 47457,
      original_name: 'acucar Mascavo.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123f6b3a-5dd2-49cb-9b05-9e62b0f32229',
      path: 'Pimenta do Reino.jpeg',
      size: 199889,
      original_name: 'Pimenta do Reino.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123cbdaa-d412-40fa-8b38-6b7b99af9912',
      path: 'Farinha de Trigo.jpeg',
      size: 88526,
      original_name: 'Farinha de Trigo.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123726d1-b094-4711-9ae8-508491cb8367',
      path: 'Alho Poró.jpeg',
      size: 15973,
      original_name: 'Alho Poró.jpeg',
      extension: 'jpeg'
    })
    await Image.create({
      id: '123556d1-b094-4711-9ae8-508491cb8123',
      path: 'Farinha.jpg',
      size: 15973,
      original_name: 'Farinha.jpg',
      extension: 'jpeg'
    })

    // companies

    await Image.create({
      id: '123556d1-b065-4711-9ae8-508491cb8123',
      path: 'frutaria01.jpeg',
      size: 15973,
      original_name: 'frutaria01.jpeg',
      extension: 'jpeg'
    })

    await Image.create({
      id: '123556d1-b078-4711-9ae8-508491cb8123',
      path: 'frutaria02.jpg',
      size: 15973,
      original_name: 'frutaria02.jpg',
      extension: 'jpg'
    })

    // simula a img adicionada pelo dono, para substituir a img default
    // 17
    await Image.create({
      id: '123556d1-b078-4711-7bb7-508491cb8123',
      path: 'tomate2.jpg',
      size: 15973,
      original_name: 'tomate2.jpg',
      extension: 'jpg'
    })
    // 18
    await Image.create({
      id: '123556d1-b001-4711-7bb7-508491cb8123',
      path: 'anuncio1.jpg',
      size: 15973,
      original_name: 'anuncio1.jpg',
      extension: 'jpg'
    })
    // 19
    await Image.create({
      id: '123556d1-b002-4711-7bb7-508491cb8123',
      path: 'anuncio2.jpg',
      size: 15973,
      original_name: 'anuncio2.jpg',
      extension: 'jpg'
    })
  }
}

module.exports = imageSeeder
