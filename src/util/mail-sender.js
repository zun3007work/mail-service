const { createTransport } = require('nodemailer');

require('dotenv').config();
const config = {
  host: process.env.HOST,
  port: +process.env.MAIL_PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
};

const transporter = createTransport(config);

/*
  Mail option will be like this:
  mailOption = {
    form,
    to,
    subject,
    html
  }
 */
const sendMail = (mailOptions) => {
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendMail;
