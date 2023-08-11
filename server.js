const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const CaseService = require('./src/entities/services/CaseService')
const services = new CaseService()
const port = process.env.PORT ?? process.env.DEFAULT_PORT
const app = express()

app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('/api/cases/:id', async (req, res) => {
  const result = await services.getCaseById(req.params.id)
  res.json(result)
})

app.get('/api/cases', async (req, res) => {
  const result = await services.getAllCases()
  res.json(result)
})

app.post('/api/cases', async (req, res) => {
  const result = await services.createCase(req.body)
  res.json(result)
})

app.get('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
