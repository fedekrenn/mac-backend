const express = require('express')
const app = express()
app.disable('x-powered-by')

const port = process.env.PORT ?? 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})
app.get('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => {
  console.log(`App listening on url http://localhost:${port}`)
})
