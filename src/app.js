'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// API version
const v1 = require('./api/v1');

const app = express();

// Security
app.use(helmet());

// CORS

// Body Parser
app.use(bodyParser.json());

// API
app.use('/api/v1', v1);

module.exports = app;
