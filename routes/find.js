var express = require('express')
var router = express.Router()
let models = require('../models')
let User = models.User
let Music = models.Music
let conj = models.MusicUser
let lookup = null
let Sequelize = require('sequelize')
let Op = Sequelize.Op
router.get('/search', function (req, res) {
  console.log('%' + req.query.keyword + '%')
  console.log('----------------\n')

  Music.findAll({
      where: {
        category: {
            [Op.iLike]: '%' + req.query.keyword + '%'
        }
      }
    })
    .then(function (category) {
      Music.findAll({
          where: {
            title: {
                [Op.iLike]: '%' + req.query.keyword + '%'
            }
          }
        })
        .then(function (judul) {
          Music.findAll({
              where: {
                artist: {
                    [Op.iLike]: '%' + req.query.keyword + '%'
                }
              }
            })
            .then(function (artist) {

              conj.findAll()
                .then(function (playlist) {

                  res.render('result', {
                    artist,
                    judul,
                    category,
                    playlist,
                    keyword: req.query.keyword
                  })

                  //disini

                })



            })




        })






    })
})


//
// router.get('/search/:keys', function (req, res) {
//   Music.findAll({
//       where: {
//         title: {
//           [Op.like]: req.params.keys,
//         }
//       }
//     })
//     .then(function (data) {
//       console.log(data)
//       res.send(data)
//     })
// })





module.exports = router
