'use strict'

const Company = use('App/Models/Company')
const DetailsCompanyTransformer = use('App/Transformers/Company/DetailsCompanyTransformer')
class CompanyController {
  async show ({ params: { id }, response, transform, pagination }) {
    try {
      let company = await Company.findOrFail(id)
      company = await transform.include('address').item(company, DetailsCompanyTransformer)
      return response.status(200).json({ data: { company } })
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = CompanyController