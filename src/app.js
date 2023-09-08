'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

// API version
const v1 = require('./api/v1');

const app = express();

// CORS
app.use(cors());

// Security
app.use(helmet());

// Body Parser
app.use(bodyParser.json());

// API
app.use('/api/v1', v1);

module.exports = app;
