'use strict'

const ProductDefault = use('App/Models/ProductDefault')
const SimpleProductDefaultTransformer = use('App/Transformers/Product/SimpleProductDefaultTransformer')

class SearchProductController {
  async index ({ request, response, transform, pagination }) {
    try {
      const name = request.input('name')

      const productDefaultQuery = ProductDefault.query()

      if (name) {
        productDefaultQuery.where('name', 'ILIKE', `%${name}%`)
      }

      productDefaultQuery
        .where('active', true)
        .orderBy('name')

      let products = await productDefaultQuery.paginate(pagination.page, pagination.perpage)

      products = await transform.paginate(products, SimpleProductDefaultTransformer)

      return response.status(200).json(products)
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = SearchProductController
