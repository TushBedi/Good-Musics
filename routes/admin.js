var express = require('express')
var router = express.Router()
let models = require('../models')
let User = models.User
let Music = models.Music


router.get("/admin",function(req,res){
    Music.findAll({
        order : ["id"]
    })
    .then(function(dataMusic){
        // res.json(dataMusic)
        res.render("admin",{dataMusic})

    })
})

router.post("/admin",function(req,res){
    Music.create({
        title : req.body.title,
        category : req.body.category,
        artist : req.body.artist
    })
    .then(function(){
        res.redirect("/admin")
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/admin/editMusic/:id",function(req,res){
    Music.findById(req.params.id)
    .then(function(data){
        res.render("edit-music",{data})
        // res.json(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post("/admin/editMusic/:id",function(req,res){
    Music.update({
        title : req.body.title,
        category : req.body.category,
        artist : req.body.artist
    },{
        where : {id:req.params.id}
    })
    .then(function(){
        res.redirect("/admin")
    })
})

router.get("/admin/delete/:id",function(req,res){
    Music.destroy({
        where : {id :req.params.id}
    })
    .then(function(){
        res.redirect("/admin")
    })
})

module.exports= router