const CaseService = require('../../entities/services/CaseService')
const services = new CaseService()

const getAllCases = async (req, res) => {
  try {
    const result = await services.getAllCases()
    res.json(result).status(200)
  } catch (error) {
    res.json(error).status(500)
  }
}

const getCaseById = async (req, res) => {
  try {
    const result = await services.getCaseById(req.params.id)
    res.json(result).status(200)
  } catch (error) {
    res.json(error).status(500)
  }
}

const createCase = async (req, res) => {
  try {
    const result = await services.createCase(req.body)
    res.json(result).status(200)
  } catch (error) {
    res.json(error).status(500)
  }
}

module.exports = {
  getAllCases,
  getCaseById,
  createCase
}
