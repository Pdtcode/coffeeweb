var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'trinhpeter15@gmail.com',
    pass: 'vahylxoeftlerzda'
  }
});

var mailOptions = {
  from: 'trinhpeter15@gmail.com',
  to: 'trinhpeter15@gmail.com',
  subject: 'Contact Form: ',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});