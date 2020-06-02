'use strict'

const SimpleCompanyTransformer = use('App/Transformers/Company/SimpleCompanyTransformer')
const Company = use('App/Models/Company')

class SearchCompanyController {
  async index ({ request, response, transform, pagination }) {
    try {
      const name = request.input('name')

      const companyQuery = Company.query()

      if (name) {
        companyQuery.where('name', 'ILIKE', `%${name}%`)
      }

      companyQuery
        .where('active', true)
        .orderBy('name')

      let companies = await companyQuery.paginate(pagination.page, pagination.perpage)
      companies = await transform.paginate(companies, SimpleCompanyTransformer)

      return response.status(200).json(companies)
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = SearchCompanyController
