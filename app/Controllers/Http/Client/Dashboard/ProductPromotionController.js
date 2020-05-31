'use strict'

const Product = use('App/Models/Product')
const PromotionTransformer = use('App/Transformers/Promotions/PromotionTransformer')
class ProductPromotionController {
  async index ({ response, transform }) {
    try {
      let products = await Product.query()
        .where('active', true)
        .where('active_promotion', true)
        .limit(10)
        .fetch()

      products = await transform.collection(products, PromotionTransformer)

      return response.status(200).send({ data: { products } })
    } catch (error) {
      return response.status(400).send({ message: 'Falha na busca, tente novamente!' })
    }
  }
}

module.exports = ProductPromotionController
