const crypto = require("crypto")
const nodemailer= require('nodemailer')
module.exports = (mail,verificationString)=>
{
  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:process.env.USER,
          pass: process.env.PASS,
        }
      });
      const mailOptions = {
        from: 'AUTHENTICATION ', 
        to: mail, 
        subject: 'verification your identity ', 
        html: `<h3>this is your verification code ${verificationString} 
        note: this verification code won't be valid after 10 minutes </h3>` // HTML body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
      });

}