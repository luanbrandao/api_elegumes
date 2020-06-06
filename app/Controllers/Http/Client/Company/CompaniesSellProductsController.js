'use strict'

const CompanyTransformer = use('App/Transformers/Company/CompanyTransformer')
// const Product = use('App/Models/Product')
const Company = use('App/Models/Company')
const Product = use('App/Models/Product')
class CompaniesSellProductsController {
  async index ({ params: { id }, request, response, transform, pagination }) {
    try {
      // select * from companies where id in (
      //   select distinct company_id from products where product_default_id = '3db3fc53-4f0e-4f9b-ab97-997fac1a419c'
      // );

      /*
       Seleciona todos os produtos que tem o id do produto_default e retorna
       um array das empresas que estão vendendo esse produto no momento
      */
      const subquery = await Product
        .query()
        .where('product_default_id', id)
        .where('active', true)
        .select('company_id')
        // .fetch()
        .pluck('company_id')

      /*
        Verifica se o id da empresa está nas que vende esse produto
      */
      const queryCompanies = Company
        .query()
        .where('active', true)
        .whereIn('id', subquery)
        .orderBy('name')

      let companies = await queryCompanies.paginate(pagination.page, pagination.perpage)
      companies = await transform.include('address').paginate(companies, CompanyTransformer)

      return response.status(200).json(companies)
    } catch (error) {
      return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
    }
  }
}

module.exports = CompaniesSellProductsController
