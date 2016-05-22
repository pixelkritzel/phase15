const sass = require('node-sass');
const fs = require('fs');
const CONFIG = require('./config');

const buildSass = function buildSass(targetDir) {
  const outPutfile = `${targetDir}/${CONFIG.dist}/assets/styles/style.css`;
  sass.render({
    file: `${targetDir}/${CONFIG.src}/assets/styles/style.scss`,
    outputStyle: 'expanded',
    outFile: outPutfile,
    sourceMap: true, // or an absolute or relative (to outFile) path
  }, (err, result) => {
    if(!err) {
      fs.writeFile(outPutfile, result.css, err => {
        err ? console.log(err) : console.log(`${outPutfile} written`)
      })
      fs.writeFile(outPutfile + '.map', result.map, err => {
        err ? console.log(err) : console.log(`Sourcemap written`)
      })
    }
  });
}

module.exports = buildSass;