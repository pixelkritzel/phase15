const fse = require('fs-extra');
const copyHTML = require('./copyHTML');
const buildSass = require('./buildSass');
const buildJS = require('./buildJS');
const CONFIG = require('./config');

const build = function build(targetDir, watch) {
  fse.removeSync(`${targetDir}/${CONFIG.dist}`);
  fse.mkdirs(`${targetDir}/${CONFIG.dist}`);
  fse.copySync(`${targetDir}/${CONFIG.src}/assets/static`, `${targetDir}/${CONFIG.dist}/assets/static`);
  copyHTML(targetDir);
  buildSass(targetDir);
  buildJS(targetDir, watch);
};

module.exports = build;