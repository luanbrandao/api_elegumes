'use strict'

const RatingHook = (exports = module.exports = {})
const Company = use('App/Models/Company')

RatingHook.updateRatingCompany = async rating => {
  const company = await Company.find(rating.company_id)

  const _rate = await company.ratings().avg('rate')
  const formatedRateInt = parseFloat(_rate[0].avg).toFixed(2)

  company.rating = formatedRateInt
  company.save()
}
