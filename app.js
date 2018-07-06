const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
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
// <<<<<<< admin
var admin = require("./routes/admin.js")
// =======
const bcrypt = require('bcrypt')
// >>>>>>> development
const helperpass = require('./helperpass')

app.locals.convert = require("./helperDate")


// app.use session sec
app.use(session({
  secret: 'good musics ',
  // resave: false,
  saveUninitialized: true,
  cookie: {}
}))
app.use("/", admin)


//

//npm install express session
// di app ->

// app.use("/", playlist)
app.use(route)
app.use(user)
app.use(music)
app.use(find)
app.listen(port, () => console.log('running on port:V 3000!'))
// >>>>>>> master
