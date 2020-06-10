'use strict'
const Company = use('App/Models/Company')
const Rating = use('App/Models/Rating')
const RatingTransformer = use('App/Transformers/Rating/RatingTransformer')

class RatingController {
  async store ({ params, request, response, transform, auth }) {
    const { company, rate, comment } = request.all()
    const client = await auth.getUser()

    try {
      await Company.findOrFail(company)

      const _rating = await Rating.create({
        user_id: client.id,
        company_id: company,
        rate,
        comment
      })
      const rating = await transform.item(_rating, RatingTransformer)
      return response.json({ data: { rating } })
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível realizar sua avaliação!'
      })
    }
  }
}

module.exports = RatingController
