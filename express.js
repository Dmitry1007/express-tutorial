var express = require('express')
  var app = express()
  app.get('/home', function(req, res) {
    res.end('Hello World!')
  })
// app.listen(3000)

app.listen(process.argv[2])
