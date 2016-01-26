const fse = require('fs-extra');
const path = require('path');
const CONFIG = require('./config');

const build = function build(targetDir) {
  fse.removeSync(`${targetDir}/${CONFIG.dist}`);
  fse.copySync(`${targetDir}/${CONFIG.src}`, `${targetDir}/${CONFIG.dist}`, function(filePath) {
    const fn = path.basename(filePath);
    return true;
  });
}

module.exports = build;