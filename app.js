const express = require('express')
const app = express()

let ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())

let route = require('./routes/index.js')
// let playlist = require('./routes/playlist')
let find = require('./routes/find')
let user = require('./routes/users.js')
let music = require('./routes/musics')
var bodyParser = require('body-parser')
var session = require('express-session')
var admin = require("./routes/admin.js")
const helperpass = require('./helperpass')




// app.use session sec
app.use(session({
  secret: 'good musics ',
  // resave: false,
  saveUninitialized: true,
  cookie: {}
}))
app.use("/",admin)


//

//npm install express session
// di app ->

// app.use("/", playlist)
app.use(route)
app.use(user)
app.use(music)
app.use(find)
app.listen(3000, () => console.log('running on port:V 3000!'))
// >>>>>>> master
