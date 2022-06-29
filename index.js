const express = require('express')
const rTracer = require('cls-rtracer')
const pino = require('pino-http')()
const app = express()
const port = 3000

app.use(rTracer.expressMiddleware())
app.use(pino)

app.get('/', (req, res) => {
  req.log.info('Hello')
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})