'use strict'
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with images
 */
const Transformer = use('App/Transformers/Image/ImageTransformer')
const Helpers = use('Helpers')
const Image = use('App/Models/Image')

const {
  manageSingleUpload,
  manageMutipleUploads
} =
 use('App/Helpers')

const fs = use('fs')

class ImageController {
  /**
   * Show a list of all images.
   * GET images
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, pagination, transform }) {
    // var images = await Image.query().orderBy('id', 'DESC')
    //   .paginate(1, 10)

    var images = await Image.query().orderBy('id', 'DESC')
      .paginate(1, 20)

    images = await transform.paginate(images, Transformer)

    return response.send(images)
  }

  /**
   * Create/save a new image.
   * POST images
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, transform }) {
    try {
      // captura uma image ou mais do request
      const fileJar = request.file('images', {
        types: ['image'],
        size: '2mb'
      })

      // retorno pro usuário
      let images = []
      // caso seja um unico arquivo - manage_single_upload
      // caso seja vários arquivos - manage_multiple_uploads
      if (!fileJar.files) {
        console.log('uma sdf')
        const file = await manageSingleUpload(fileJar)
        // precisa verificar novamento se tem multilpos arquivos
        if (file.moved()) {
          let image = await Image.create({
            path: file.fileName,
            size: file.size,
            original_name: file.clientName,
            extension: file.subtype

          })

          // const transformedImage = await transform.item(image, Transformer)

          images.push(image)
          // imagens.push(transformedImage)

          return response.status(201).send({
            successes: images,
            errors: {}
          })
        }

        return response.status(400).send({
          message: 'Não foi possível processar está imagem no momento'
        })
      }

      console.log('varias')
      let files = await manageMutipleUploads(fileJar)

      await Promise.all(
        files.successes.map(async file => {
          console.log('asdf')
          let image = await Image.create({
            path: file.fileName,
            size: file.size,
            original_name: file.clientName,
            extension: file.subtype
          })

          // const transformedImage = await transform.item(image, Transformer)

          // images.push(image)
          // images.push(transformedImage)
          images.push(image)
        })
      )

      return response.status(201).send({ successes: images, errors: files.errors })
    } catch (error) {
      return response.status(400)
        .send({ message: 'Não foi possível processar sua solicitação' })
    }
  }

  /**
   * Display a single image.
   * GET images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params: { id }, request, response, transform }) {
    try {
      var image = await Image.findOrFail(id)
      image = await transform.item(image, Transformer)
      return response.status(200).json({ data: image })
    } catch (error) {
      return response.status(400).json({ message: 'Falha na busca, tente novamente!' })
    }
  }

  /**
   * Update image details.
   * PUT or PATCH images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params: { id }, request, response, transform }) {
    try {
      const image = await Image.findOrFail(id)
      image.merge(request.only(['original_name']))
      await image.save()
      // return response.status(200).send(await transform.item(image, Transformer))
      return response.status(200).send(image)
    } catch (e) {
      return response.status(500).send({
        message: 'Não foi possível processar a sua soliticação',
        error: e.message
      })
    }
  }

  /**
   * Delete a image with id.
   * DELETE images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {
    const image = await Image.findOrFail(id)

    try {
      const filePath = Helpers.publicPath(`images/${image.path}`)

      // await fs.unlink( filePath , err => {
      //   if(!err)
      //   await image.delete()
      // })

      await fs.unlinkSync(filePath)
      await image.delete()
      return response.status(204).send()
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível deletar a imagem no momento'
      })
    }
  }
}

module.exports = ImageController
