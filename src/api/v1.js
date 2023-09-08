const express = require('express');
const path = require('path');

const { postMail } = require('./controller/mail');

const router = express.Router();

router.post('/mail-receiver', postMail);

module.exports = router;
