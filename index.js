var express = require('express')
var axios = require('axios')
var config = require('./config.js')
var session = require('express-session')
var cors = require('cors')
var massive = require('massive')
var {
  json
} = require('body-parser')
var port = 3001
var app = express()
const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses'
});



massive(config.postgres).then(dbInstance => {
  app.set('db', dbInstance)
})
yelp.defaults.headers.common["Authorization"] =
  config.yelpToken;

app.use(express.static(__dirname + '/public'))
app.use(json())

// app.post("/api/form", function(req, res, next){
//   req.app.get('db').run('insert into bars_table (bar_name, street, city, zip, specials, rating, review) values ($1, $2, $3, $4, $5, $6, $7)', [req.body.barName, req.body.street, req.body.city, req.body.zip, req.body.specials, req.body.rating, req.body.review]);
// })

app.get("/api/bar", function(req, res, next) {
  var db = req.app.get('db')
  db.findBar()
    .then(response => {
      console.log(response)
      return res.status(200).json(response);
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json(err)
    })

})

app.put("/api/bar", function(req, res, next) {
  var db = req.app.get('db')
  db.updateBar([req.body.id, req.body.newName])
    .then(response => {
      console.log(response)
      return res.status(200).json(response);
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json(err);
    })
})

app.post("/api/form", function(req, res, next) {
  var db = req.app.get('db')
  db.insertBar([req.body.barName, req.body.street, req.body.city, req.body.zip, req.body.specials, req.body.rating, req.body.review, req.body.lat, req.body.lng])
    .then(response => {
      console.log(response)
      return res.status(200).json(response)
    })
    .catch(err => {
      // console.log(err)
      return res.status(500).json(err)
    })
})





app.delete('/api/bar/:bar_id', function(req, res, next) {
  var db = req.app.get('db')
  db.deleteBar([req.params.bar_id])
    .then(response => {
      // console.log(response)
      return res.status(200).json(response)
    })
    .catch(err => {
      // console.log(err)
      return res.status(500).json(err);
    })
})

// app.post("/api/other_other_form", function(req, res, next) {
//   req.app.get('db').bars_table.insert(insertObj)
//   .then(res => console.log(response))
//   .catch(err => console.log(err))
// })
app.get('/bars', (req, res, next) => {

  req.app.get('db')
    .findBar()
    .then(function(specials){
      return res.status(200).json(specials)
    })
    .catch(function(err){
      return res.status(500).json(err)
    })
  // yelp.get(`https://api.yelp.com/v3/businesses/search?term=bars&location=${req.query.location}`)
  // yelp.get(`https://api.yelp.com/v3/businesses/search?term=bars&location=75202,75201&limit=50`)
  //   .then(results => {
  //     // console.log("this is a test", results)
  //     res.send(results.data)
  //
  //   })
})




// yelp.get(`https://api.yelp.com/v3/businesses/search?id/reviews=${req.query.reviews}`)
// .then(results => {
//   res.send(results.data)
//   })
// })

app.listen(port, function() {
  console.log('working?')
})
