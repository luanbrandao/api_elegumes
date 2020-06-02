'use strict'

const ProductDefault = use('App/Models/ProductDefault')
const SimpleProductDefaultTransformer = use('App/Transformers/Product/SimpleProductDefaultTransformer')
const SimpleCompanyTransformer = use('App/Transformers/Company/SimpleCompanyTransformer')
const Company = use('App/Models/Company')

class SearchController {
  async index ({ request, response, transform, pagination }) {
    try {
      const name = request.input('name')

      const companyQuery = Company.query()
      const productDefaultQuery = ProductDefault.query()

      if (name) {
        productDefaultQuery.where('name', 'ILIKE', `%${name}%`)
        companyQuery.where('name', 'ILIKE', `%${name}%`)
      }

      if (!pagination.perpage) {
        pagination.perpage = 10
      }

      productDefaultQuery
        .where('active', true)
        .orderBy('name')
        .limit(pagination.perpage)

      companyQuery
        .where('active', true)
        .orderBy('name')
        .limit(pagination.perpage)

      let companies = await companyQuery.paginate(pagination.page, pagination.perpage)
      let products = await productDefaultQuery.paginate(pagination.page, pagination.perpage)

      companies = await transform.paginate(companies, SimpleCompanyTransformer)
      products = await transform.paginate(products, SimpleProductDefaultTransformer)

      return response.status(200).json({ products, companies })
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = SearchController
