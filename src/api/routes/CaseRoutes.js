const { createCase, getAllCases, getCaseById } = require('../controllers/CaseController')
const express = require('express')

const caseRouter = express.Router()

caseRouter.get('/', getAllCases)

caseRouter.get('/:id', getCaseById)

caseRouter.post('/', createCase)

module.exports = { caseRouter }
