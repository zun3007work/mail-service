const sendMail = require('../../util/mail-sender');

const postMail = (req, res, next) => {
  // mailOptions will be required in body
  const mailOptions = req.body.mailOptions;
  sendMail(mailOptions);
  res.json(
    JSON.stringify({
      msg: 'Mail has been sent',
    })
  );
};

module.exports = {
  postMail,
};
