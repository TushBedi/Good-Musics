var express = require('express')
var router = express.Router()
let models = require('../models')
let User = models.User
let Music = models.Music
let Playlist = models.MusicUser


router.get("/admin", function (req, res) {
  // res.send(req.session.current_user)
  if (req.session.current_user.name == 'admin') {

    Music.findAll({
        order: ["id"]
      })
      .then(function (dataMusic) {
        // res.json(dataMusic)
        res.render("admin", {
          dataMusic
        })

      })
  } else {
    res.redirect('/login')
  }

})

router.post("/admin", function (req, res) {

  if (req.session.current_user.name == 'admin') {





    Music.create({
        title: req.body.title,
        category: req.body.category,
        artist: req.body.artist
      })
      .then(function () {
        res.redirect("/admin")
      })
      .catch(err => {
        console.log(err)
      })


  } else {
    res.redirect('/login')
  }
})

router.get("/admin/editMusic/:id", function (req, res) {
  if (req.session.current_user.name == 'admin') {
    Music.findById(req.params.id)
      .then(function (data) {
        res.render("edit-music", {
          data
        })
        // res.json(data)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    res.redirect('/login')
  }
})

router.post("/admin/editMusic/:id", function (req, res) {
  if (req.session.current_user.name == 'admin') {
    Music.update({
        title: req.body.title,
        category: req.body.category,
        artist: req.body.artist
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(function () {
        res.redirect("/admin")
      })
  } else {
    res.redirect('/login')
  }
})

router.get("/admin/delete/:id", function (req, res) {
  if (req.session.current_user.name == 'admin') {
    Music.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function () {
        res.redirect("/admin")
      })
  } else {
    res.redirect('/login')
  }
})

router.get("/admin/listUser", function (req, res) {
  if (req.session.current_user.name == 'admin') {
    User.findAll({
        include: [Playlist],
        // group : ["playlistName"]
      })
      .then(function (allData) {
        res.render("list-user", {
          allData
        })
        // res.json(allData)

      })
  } else {
    res.redirect('/login')
  }
})

module.exports = router
