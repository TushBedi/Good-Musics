let kirim = function (email, user) {


  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'goodmusicsApp@gmail.com',
      pass: 'handi161616?'
    }
  });


  const mailOptions = {
    from: 'goodmusicsApp@address.com', // sender address
    to: email, // list of receivers
    subject: 'Welcome to the good Apps ', // Subject line
    html: '<img src="https://www.schoolchalao.com/app/webroot/img/schoolfacility/school-chalao-music-room.png"/> <br/><p>Hi <b>' + user + '</b>, welcome to the Good Apps!.  Enjoy our Apps and choose music provided </p>' // plain text body
  };


  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });



}


module.exports = kirim
