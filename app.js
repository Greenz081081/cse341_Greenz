const express = require('express')
const parser = require('body-parser')
const mongodb = require('./db/connect')

const app = express()
const port = process.env.PORT || 8080

app.use(parser.json())
app.use('/', require('./routes'))
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port)
    console.log(`Connected to DB and listening on ${port}`)
  }
})
