'use strict'

const Product = use('App/Models/Product')
const ProductTransformer = use('App/Transformers/Product/ProductTransformer')

class CompanyProductsController {
  async index ({ params: { id }, response, transform, pagination }) {
    try {
      const query = Product.query()
        .select('products.*', 'product_defaults.name as name')
        .where('products.active', true)
        .where('company_id', id)
        .innerJoin('product_defaults', 'product_default_id', 'product_defaults.id')
      /**
        *  como fez o inner join, agora tem o 'name' do produto_defaul
        *  junto com os dados do produto
       */
        .orderBy('name')

      let products = await query.paginate(pagination.page, pagination.perpage)
      products = await transform.paginate(products, ProductTransformer)

      return response.status(200).json(products)
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = CompanyProductsController
