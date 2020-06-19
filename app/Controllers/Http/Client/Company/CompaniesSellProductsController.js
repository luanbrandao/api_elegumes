'use strict'

const CompanyTransformer = use('App/Transformers/Company/CompanyTransformer')
// const Product = use('App/Models/Product')
const Company = use('App/Models/Company')
// const Product = use('App/Models/Product')
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

      // const subquery = await Product
      //   .query()
      //   .where('product_default_id', id)
      //   .where('active', true)
      //   .select('company_id')
      //   // .fetch()
      //   .pluck('company_id')

      /*
        Verifica se o id da empresa está nas que vende esse produto
      */
      // const queryCompanies = Company
      //   .query()
      //   .where('active', true)
      //   .whereIn('id', subquery)
      //   .orderBy('name')

      const { filter } = request.only(['filter'])
      /*
          pending,cancelled,shipped,paid,finished
      */
      const queryCompanies = Company.query()

      if (filter) {
        queryCompanies.where('name', 'ILIKE', `%${filter}%`)
      }

      // seleciona o price_product apenas para ordenar a lista
      queryCompanies
        .select('companies.*', 'products.price as price_product', 'products.id as product_id')
        .where('products.active', true)
        .where('companies.active', true)
        // pega o valor do produto nessa loja
        .innerJoin('products', 'companies.id', 'products.company_id')
        .where('products.product_default_id', id)
        .orderBy('price_product')

      const _companies = await queryCompanies.paginate(pagination.page, pagination.perpage)
      const companies = await transform.include('product').paginate(_companies, CompanyTransformer)

      return response.status(200).json(companies)
    } catch (error) {
      // return response.status(400).send({ message: 'Falha na requisição, tente novamente!' })
      return response.status(400).send({ message: error })
    }
  }
}

module.exports = CompaniesSellProductsController
