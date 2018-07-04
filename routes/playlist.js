var express = require('express')
var router = express.Router()
var model = require("../models")
var Playlist = model.MusicUser
var Music = model.Music
var User = model.User


router.get('/user/:id/playlist', function (req, res) {
    Playlist.create({
        UserId : req.params.id,
        MusicId : req.body.id,
        playlistName : req.body.playlistName
    })
    .then(function(){
        res.redirect('/music')
    })
})

router.get('/music',function(req,res){
    Music.findAll()
    .then(function(data){
        res.render("music",{data : data})
        // res.json(data)
    })
})

router.get('/playlist/:id',function(req,res){
    User.findById(req.params.id
    //     ,{
    //     include : [Music]
    // }
)
    .then(function(dataUser){
        // res.json(dataUser)
        Music.findAll()
        .then(function(dataMusic){
            res.render("user_music",{dataUser : dataUser,dataMusic:dataMusic})
            // res.json(dataMusic)
           
        })
    })
})

router.post('/playlist/:id',function(req,res){
    Playlist.create({
        UserId : req.params.id,
        MusicId : req.body.musicId,
        playlistName : req.body.playlistName
    })
    .then(function(data){
        res.json(data)
    })
})

router.get('/myPlaylist/:id',function(req,res){
    console.log(req.params.id)
    Playlist.findAll({
        include : [User,Music],
        where : { UserId : req.params.id}
    })
    .then(function(allData){
        // res.json(allData)
        res.render('playlist',{allData : allData})
    })
    .catch(function(err){
        console.log(err)
    })
})

module.exports = router