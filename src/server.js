const express = require('express');
const CONFIG = require('./config');

const app = express();

const server = function server(options) {
  app.use(express.static(`${options.targetDir}/${CONFIG.dist}`));
  const server = app.listen(options.port, function() {
    console.log(arguments);
  });
  console.log(`Development Server is listening on htttp://localhost:${options.port}`);
}

module.exports = server;