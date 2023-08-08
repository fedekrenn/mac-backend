const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const datito = require('./prueba.json')
const CaseProvider = require('./src/entities/providers/CaseProvider')

const port = process.env.PORT || process.env.DEFAULT_PORT
const app = express()

app.disable('x-powered-by')
app.use(express.static('public'))

app.get('/', async (req, res) => {
  const caseProvider = new CaseProvider()

  const result = await caseProvider.createCase(datito)
  res.json({ result: `Creado correctamente bajo el id: ${result._id}` })
})

app.get('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => {
  console.log(`App listening on url http://localhost:${port}`)
})
