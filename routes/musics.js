 var express = require('express')
 var router = express.Router()
 let models = require('../models')

 let Playlist = models.MusicUser
 let User = models.User
 let Music = models.Music

 router.get('/musics', function (req, res, next) {
   // console.log(req.session.current_user.id)
   if (req.session.current_user != null) {
     next()
   } else {
     res.redirect('/')
   }

 }, function (req, res) {
   Playlist.findAll({
       include: [User, Music],
       where: {
         UserId: req.session.current_user.id
       }
     })
     .then(function (allData) {

       Music.findAll()
         .then(function (dataMusic) {
           // res.json(allData)
           res.render('musics', {
             dataMusic,
             cek: req.session.current_user,
             allData
           })
         })
         .catch(function (err) {
           console.log(err)
         })
     })
 })

 router.get("/musics/add", function (req, res) {

   // console.log("=============",req.session.curent_user.id)

   res.render("user_music", {
     err: null
   })
 })

 router.post("/musics/add", function (req, res) {
   Playlist.create({
       UserId: req.session.current_user.id,
       playlistName: req.body.playlistName
     })
     .then(function () {
       res.redirect("/musics")
     })
     .catch(err => {
       res.render("user_music", {
         err: err.message
       })
     })
 })

 router.get("/musics/:playlistName", function (req, res) {
   Playlist.destroy({
       where: {
         UserId: req.session.current_user.id,
         playlistName: req.params.playlistName
       }

     })
     .then(function () {
       res.redirect("/musics")
     })
     .catch(err => {
       res.send(err)
     })
 })

 router.get("/musics/:playlistName/addMusic", function (req, res) {
   Playlist.findAll({
       where: {
         UserId: req.session.current_user.id,
         playlistName: req.params.playlistName
       },
       include: [User, Music]
     })
     .then(function (playlist) {
       // res.json(playlist)
       // res.render("playlist",{playlist})
       Music.findAll()
         .then(function (dataMusic) {
           res.render("playlist", {
             playlist,
             dataMusic
           })
         })
     })
 })

 router.post("/musics/:playlistName/addMusic", function (req, res) {
   Playlist.create({
       UserId: req.session.current_user.id,
       MusicId: req.body.musicId,
       playlistName: req.params.playlistName
     }, {
       include: [User, Music]
     })
     .then(function () {
       Playlist.findAll({
           where: {
             UserId: req.session.current_user.id,
             playlistName: req.params.playlistName
           },
           include: [User, Music]
         })
         .then(function (playlist) {
           // res.json(playlist)
           // res.render("playlist",{playlist})
           Music.findAll()
             .then(function (dataMusic) {
               res.render("playlist", {
                 playlist,
                 dataMusic
               })
             })
         })
     })
     .catch(err => {
       console.log(err)
     })
 })

 router.get("/musics/:id/delete", function (req, res) {
   Playlist.destroy({
       where: {
         MusicId: req.params.id,
         UserId: req.session.current_user.id
       },
       include: [User, Music]
     })
     .then(function () {
       Playlist.findAll({
           where: {
             UserId: req.session.current_user.id,
             playlistName: req.params.playlistName
           },
           include: [User, Music]
         })
         .then(function (playlist) {
           // res.json(playlist)
           // res.render("playlist",{playlist})
           // Music.findAll()
           // .then(function(dataMusic){
           //   res.render("playlist",{playlist,dataMusic})
           // })
           res.redirect("/musics")
         })
     })
     .catch(err => {
       console.log(err)
     })

 })



 router.get('/playing', function (req, res) {

   req.session.current_user.play = 'playing';

   res.redirect('/musics')


 })


 router.get('/stop', function (req, res) {

   req.session.current_user.play = 'stop';
   res.redirect('/musics')


 })





 module.exports = router
