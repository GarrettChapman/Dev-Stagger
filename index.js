var express = require('express')
var axios = require('axios')
var config = require('./config.js')
var session = require('express-session')
var cors = require('cors')
var {
  json
} = require('body-parser')

var app = express()

const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses'
});

yelp.defaults.headers.common["Authorization"] =
  config.yelpToken;

var port = 3001

app.use(express.static(__dirname + '/js'))

app.get('/bars', (req, res, next) => {


  // yelp.get(`https://api.yelp.com/v3/businesses/search?term=bars&location=${req.query.location}`)
yelp.get(`https://api.yelp.com/v3/businesses/search?term=bars&location=75202,75201&limit=50`)
    .then(results => {
      console.log("this is a test", results)
      res.send(results.data)

    })
})




// yelp.get(`https://api.yelp.com/v3/businesses/search?id/reviews=${req.query.reviews}`)
// .then(results => {
//   res.send(results.data)
//   })
// })

app.listen(port, function() {
  console.log('working?')
})
