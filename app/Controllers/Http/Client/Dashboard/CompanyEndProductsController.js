'use strict'
const moment = require('moment')

const DB = use('Database')

class CompanyEndProductsController {
  async index ({ request, response, auth }) {
    const lastWeek = moment().subtract(7, 'days').format()

    try {
      const companies = await DB.from('companies')
        .where('active', true)
        .where('created_at', '>', lastWeek)
        .orderBy('created_at', 'desc')
        .limit(10)

      const topProducts = await DB.from('product_defaults')
        .where('active', true)
        .orderBy('weekly_sales', 'desc')
        .limit(10)

      return response.status(200).send({ data: { companies, topProducts } })
    } catch (error) {
      return response.status(400).send({ message: 'Falha na busca, tente novamente!' })
    }
  }
}

module.exports = CompanyEndProductsController
