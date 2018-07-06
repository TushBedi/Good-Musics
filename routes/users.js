var express = require('express')
var router = express.Router()
let models = require('../models')
let User = models.User
// const helperpass = require('../helperpass')
let mails = require('../mail')

const bcrypt = require('bcrypt')

router.get('/register', function (req, res, next) {

  if (req.session.current_user == null) {
    next()
  } else {
    res.redirect('/musics')
  }

}, function (req, res) {
  res.render('register', {
    err: null
  })


})

//pakai crypto
router.post('/register', function (req, res) {
  User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password // => helperpass(req.body.password) // atau dibuat di model aja
    })
    .then(function () {
      mails(req.body.email, req.body.name)
      res.redirect('/login')
    })
    .catch(function (err) {
      console.log(err)
      // res.send(err)
      res.render('register', {
        err: err
      })


    })

})



router.get('/login', function (req, res, next) {
  // console.log("============",req.session.current_user.name)
  // if(req.session.current_user.name == "admin"){
  //   res.resdirect("/admin")
  // }else{
    if (req.session.current_user != null) {
      res.redirect('/musics')
    } else {
      next()
    }
  
 
}, function (req, res) {
  res.render('login', {
    msg: null
  })
})






router.post('/login', function (req, res) {
  User.findOne({
      where: {
        email: req.body.email,
        //  password: req.body.password // req.body.password //crypto
      }
    })
    .then(function (userr) {
// <<<<<<< admin
      // console.log('---------------', userr)
// =======
// >>>>>>> development
      if (userr) {

        let pass = bcrypt.compareSync(req.body.password, userr.password);

        if (pass == true) {


          req.session.current_user = userr
          res.redirect('/musics') //ke dashboard

        } else {
          res.render('login', {
            msg: "username/pass salah"
          })
        }



      } else {
        res.render('login', {
          msg: "username/pass salah"
        })

      }



      // console.log('---------------', userr)
      // if (pass) {
      //
      // } else {
      //
      // }
    })
})



router.get('/logout', function (req, res) {
  req.session.current_user = null
  res.redirect('/login')
})





////// si dashboar
// if success
// req, res, next
//dashboard nya
// router.get('/', function (req, res, next) {
//
//   if (req.session.current_user) {
//     next()
//   } else {
//
//     res.redirect('/login')
//
//   }
//
// }, function (req, res) { //then
//
//   //show data dashboard disini
//
//
//
// })

module.exports = router
