'use strict'

const Product = use('App/Models/Product')
const PromotionTransformer = use('App/Transformers/Promotions/PromotionTransformer')
class ProductPromotionController {
  async index ({ response, transform, pagination }) {
    try {
      const query = Product.query()

      query
        .where('active', true)
        .where('active_promotion', true)
        .fetch()

      let products = await query.paginate(pagination.page, pagination.perpage)

      products = await transform.paginate(products, PromotionTransformer)

      return response.status(200).json(products)
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = ProductPromotionController
