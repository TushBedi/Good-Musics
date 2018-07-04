const express = require('express')
const app = express()
let route = require('./routes/index.js')
let user = require('./routes/users.js')
let music = require('./routes/musics')
let ejs = require('ejs')
app.set('view engine', 'ejs')
var bodyParser = require('body-parser')
var session = require('express-session')
app.use(bodyParser.urlencoded({
  extended: false
}))

const helperpass = require('./helperpass')




// app.use session sec
app.use(session({
  secret: 'good musics ',
  // resave: false,
  saveUninitialized: true,
  cookie: {}
}))



//

//npm install express session
// di app ->
app.use(route)
app.use(user)
app.use(music)
app.listen(3000, () => console.log('running on port:V 3000!'))
