const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const fs = require('fs');
const CONFIG = require('./config');

const buildJS = function buildJS(targetDir, watch) {
  const watchOptions = {
    cache: {},
    packageCache: {},
    plugin: [watchify]
  }
  
  const b = browserify( watch ? watchOptions : undefined);

  b.add(`${targetDir}/${CONFIG.src}/assets/scripts/script.js`)
   .transform(babelify, {presets: ['es2015', 'react']})
   .bundle().pipe(fs.createWriteStream(`${targetDir}/${CONFIG.dist}/assets/scripts/script.js`));
  
  b.on('update', bundle);
  bundle();

  function bundle() {
    b.bundle().pipe(fs.createWriteStream(`${targetDir}/${CONFIG.dist}/assets/scripts/script.js`));
  }
};

module.exports = buildJS;