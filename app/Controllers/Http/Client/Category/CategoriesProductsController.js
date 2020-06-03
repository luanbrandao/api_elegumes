'use strict'

const SimpleProductDefaultTransformer = use('App/Transformers/Product/SimpleProductDefaultTransformer')
const ProductDefault = use('App/Models/ProductDefault')
class CategoriesProductsController {
  async index ({ params: { id }, request, response, transform, pagination }) {
    try {
      const query = ProductDefault.query().where('category_id', id).orderBy('name')

      let products = await query.paginate(pagination.page, pagination.perpage)
      products = await transform.paginate(products, SimpleProductDefaultTransformer)

      return response.status(200).json(products)
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = CategoriesProductsController
