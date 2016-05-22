const fse = require('fs-extra');
const path = require('path');
const CONFIG = require('./config');

const copyHTML = function copyHTML(targetDir, file = '') {
  fse.copySync(`${targetDir}/${CONFIG.src}/${file}`, `${targetDir}/${CONFIG.dist}/${file}`, /\.html$/);
}

module.exports = copyHTML;