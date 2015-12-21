const fse = require('fs-extra');

const scaffold = function scaffold(targetDirectory) {
  console.log(targetDirectory)
  fse.ensureDir(targetDirectory, (error) => {
    if (error) {
      console.log(`Failed to access or create directory ${targetDirectory}`);
      console.log(error);
    }
  });

  fse.copy(`${__dirname}/../assets/scaffold`, targetDirectory, (error) => {
    if (error) {
      console.log('Failed to scaffold new app');
      console.log(error);
    }
  })
}

exports.scaffold = scaffold;