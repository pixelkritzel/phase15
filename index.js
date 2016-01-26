#!/usr/bin/env node
'use strict';

const program = require('commander');

const config = require('./src/config');

const scaffold = require('./src/scaffold');
const build = require('./src/build');
const server = require('./src/server');
const watch = require('./src/watch');


const options = {};
options.port = config.port;

program
  .arguments('<command> [target]')
  .action( (command, target) => {
    options.command = command;
    options.target = target ? target : process.cwd();
  });
program.parse(process.argv);

if (options.command === 'scaffold') {
  return scaffold(options.target);
}

if (options.command === 'build') {
  build(options.target);
}

if (options.command === 'server') {
  build(options.target);
  server(options);
  watch(options);
}