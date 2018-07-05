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
    html: '<p>Hi ' + user + ', welcome to the Good Apps!.  Enjoy our apps and listening all musics </p>' // plain text body
  };


  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });



}


module.exports = kirim
