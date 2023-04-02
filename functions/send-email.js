const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  const { fullname, email, subject, message } = JSON.parse(event.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
  });
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'trinhpeter12@gmail.com',
    subject,
    text: `Name: ${fullname}\nEmail: ${email}\n\n${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
