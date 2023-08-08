const { Schema, model } = require('mongoose')

const CaseSchema = new Schema({
  exa: { type: String, required: true },
  name: { type: String, required: true },
  caseNumber: { type: Number, required: true },
  cell: { type: String, required: true },
  origin: { type: String, required: true },
  process: { type: String, required: true },
  date: { type: String, required: true },
  uploadDate: { type: Date, required: true },
  monitor: { type: String, required: true },
  comment: { type: String, required: true },
  contactReason: { type: String, required: true },
  improvementSkill: { type: String, required: true },
  ec: { type: Schema.Types.Mixed, default: false },
  om: { type: Schema.Types.Mixed, required: false }
})

const CaseModel = model('Case', CaseSchema)

module.exports = { CaseModel }
