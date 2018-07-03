const express = require('express')
const app = express()
let route = require('./routes/index.js')
app.use(route)

app.listen(3000, () => console.log('Example app listening on port:V 3000!'))
