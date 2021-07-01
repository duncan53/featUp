const nodemailer = require('nodemailer');

function sendMail(email, subject, text) {
  const transporter = nodemailer.createTransport({
    service: '1und1',
    auth: {
      user: 'noreply@moncabinetradio.net',
      pass: 'apYQscS8sqV2T2r*'
    }
  });

  const mailOptions = {
    from: 'noreply@moncabinetradio.net',
    to: email,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


module.exports = {
  sendMail
};
