const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || process.env.DEFAULT_PORT
const app = express()

const { caseRouter } = require('./src/api/routes/CaseRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by')

app.use('/api/cases', caseRouter)

// Default
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

// Server init
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
