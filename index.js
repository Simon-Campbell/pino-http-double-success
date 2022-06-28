const express = require('express')
const pino = require('pino-http')()
const app = express()
const port = 3000

app.use(pino)

app.get('/', (req, res) => {
  req.log.info('Hello')
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})