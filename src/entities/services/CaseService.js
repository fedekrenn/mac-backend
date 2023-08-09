const CaseProvider = require('../providers/CaseProvider')
const provider = new CaseProvider()

class CaseService {
  async createCase(data) {
    data.uploadDate = Date.now()
    return await provider.createCase(data)
  }

  async getCaseById(id) {
    const formattedId = id.replace(/-/g, '')
    return await provider.getCaseById(formattedId)
  }

  async getAllCases() {
    return await provider.getAllCases()
  }
}

module.exports = CaseService
