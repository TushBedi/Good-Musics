const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
let route = require('./routes/index.js')
// <<<<<<< editPlaylist
// let playlist = require('./routes/playlist.js')
// app.use(route)
// // app.use(user)


// app.use("/",playlist)



// app.listen(3000, () => console.log('Example app listening on port:V 3000!'))
// =======
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

// app.use("/",playlist)
app.use(route)
app.use(user)
app.use(music)
app.listen(3000, () => console.log('running on port:V 3000!'))
// >>>>>>> master
