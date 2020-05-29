'use strict'
const moment = require('moment')
const CompanyTransformer = use('App/Transformers/Client/CompanyTransformer')

const Company = use('App/Models/Company')
const ProductDefault = use('App/Models/ProductDefault')

class NewCompanyEndTopProductsController {
  async index ({ response, transform }) {
    const lastWeek = moment().subtract(7, 'days').format()

    try {
      let newCompanies = await Company.query()
        .where('active', true)
        .where('created_at', '>', lastWeek)
        .orderBy('created_at', 'desc')
        .limit(10)
        .fetch()

      const topProducts = await ProductDefault.query()
        .where('active', true)
        .orderBy('weekly_sales', 'desc')
        .limit(10)
        .fetch()

      newCompanies = await transform.collection(newCompanies, CompanyTransformer)

      return response.status(200).send({ data: { newCompanies, topProducts } })
    } catch (error) {
      return response.status(400).send({ message: 'Falha na busca, tente novamente!' })
    }
  }
}

module.exports = NewCompanyEndTopProductsController
