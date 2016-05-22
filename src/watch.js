const chokidar = require('chokidar');
const fse = require('fs-extra');
const livereload = require('livereload');
const buildSass = require('./buildSass');
const copyHTML = require('./copyHTML');
const CONFIG = require('./config');


const watch = function watch(options) {
  // Recompile Sass on change
  chokidar.watch(`${options.target}/${CONFIG.src}/assets/styles`, {ignored: /[\/\\]\./}).on('all', (event, path) => {
    if (path.match(/\.scss$/)) {
      buildSass(options.target);
    }
  });
  
  // Brute force copy static assets
  chokidar.watch(`${options.target}/${CONFIG.src}/assets/static`, {ignored: /[\/\\]\./}).on('all', (event, path) => {
    fse.copySync(`${options.target}/${CONFIG.src}/assets/static`, `${options.target}/${CONFIG.dist}/assets/static`);
  });
  
  // Copy HTML on change
  chokidar.watch(`${options.target}/${CONFIG.src}`, {ignored: /[\/\\]\./}).on('all', (event, path) => {
    if (path.match(/\.html$/)) {
      const file = path.split(`${options.target}/${CONFIG.src}/`)[1]
      copyHTML(options.target, file)
    }
  });
  
  const livereloadServer = livereload.createServer();
  livereloadServer.watch(`${options.target}/${CONFIG.dist}`);

};

module.exports = watch;