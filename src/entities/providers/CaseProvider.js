const { connect } = require('mongoose')
const { CaseModel } = require('../models/CaseModel')

connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

class CaseProvider {
  async createCase (data) {
    try {
      const newCase = new CaseModel(data)
      const result = await newCase.save()
      return result
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }
}

module.exports = CaseProvider
