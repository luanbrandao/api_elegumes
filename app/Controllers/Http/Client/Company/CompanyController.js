'use strict'

const Company = use('App/Models/Company')
const DetailsCompanyTransformer = use('App/Transformers/Company/DetailsCompanyTransformer')
class CompanyController {
  async show ({ params: { id }, response, transform, pagination }) {
    try {
      let company = await Company.findOrFail(id)

      const one = await company.ratings().where('rate', 1).count()
      const two = await company.ratings().where('rate', 2).count()
      const three = await company.ratings().where('rate', 3).count()
      const four = await company.ratings().where('rate', 4).count()
      const five = await company.ratings().where('rate', 5).count()

      const stars = {
        one: parseInt(one[0].count),
        two: parseInt(two[0].count),
        three: parseInt(three[0].count),
        four: parseInt(four[0].count),
        five: parseInt(five[0].count)
      }

      company = await transform.include('address').item(company, DetailsCompanyTransformer)
      company.stars = stars

      return response.status(200).json({ data: { company } })
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = CompanyController
