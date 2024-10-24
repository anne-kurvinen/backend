const express = require('express')

const app = express(),
  port = process.env.PORT || 3000

  app.get('/', (_request, response) => {
  response.send({ hello: 'World' })
})

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})


var cors = require('cors')
 
app.use(cors())

  app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
   
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

