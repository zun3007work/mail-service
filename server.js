const http = require('http');
const app = require('./src/app');

// Enviroment Config
require('dotenv').config();
const config = {
  PORT: process.env.PORT,
};

console.log(config.PORT);

const server = http.createServer(app);

server.listen(config.PORT);
