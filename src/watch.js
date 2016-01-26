const CONFIG = require('./config');
var chokidar = require('chokidar');

const watch = function watch(options) {
  // One-liner for current directory, ignores .dotfiles
  chokidar.watch(`${options.target}/${CONFIG.src}`, {ignored: /[\/\\]\./}).on('all', (event, path) => {
    console.log(event, path);
  });
}

module.exports = watch;