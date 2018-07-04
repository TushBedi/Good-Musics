var express = require('express')
var router = express.Router()
let models = require('../models')
let {
  Music
} = models

router.get('/musics', function (req, res, next) {
  // console.log(req.session.current_user.id)
  if (req.session.current_user != null) {
    next()
  } else {
    res.redirect('/')
  }

}, function (req, res) {
  Music.findAll()
    .then(function (dataMusic) {
      res.render('musics', {
        dataMusic,
        cek: req.session.current_user
      })
    })
    .catch(function (err) {
      console.log(err)
    })
})






module.exports = router
