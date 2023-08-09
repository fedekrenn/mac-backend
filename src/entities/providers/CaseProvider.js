const { connect } = require('mongoose')
const { CaseModel } = require('../models/CaseModel')

connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

class CaseProvider {
  async createCase(data) {
    try {
      const newCase = new CaseModel(data)
      return await newCase.save()
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  async getCaseById(id) {
    try {
      const result = await CaseModel.findById(id)
      return result
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  async getAllCases() {
    try {
      const result = await CaseModel.find()
      return result
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
}

module.exports = CaseProvider
