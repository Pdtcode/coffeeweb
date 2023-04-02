import {name, email, subject, message} from '../pages/Contact'
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'trinhpeter15@gmail.com',
    pass: 'vahylxoeftlerzda'
  }
});

function sendMail(name, email, subject, message) {
    
  var mailOptions = {
    from: 'trinhpeter15@gmail.com',
    to: 'trinhpeter15@gmail.com',
    subject: `${subject}`,
    text: `Name: ${name}, Email: ${email}, Message: ${message}`
  };



  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default sendMail;