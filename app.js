const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
let route = require('./routes/index.js')
let playlist = require('./routes/playlist.js')
app.use(route)
// app.use(user)


app.use("/",playlist)



app.listen(3000, () => console.log('Example app listening on port:V 3000!'))
