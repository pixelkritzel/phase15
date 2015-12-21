#!/usr/bin/env node
'use strict';

const scaffold = require('./src/scaffold').scaffold;
const program = require('commander');

let options = {};

program
  .arguments('<command> [target]')
  .action( (command, target) => {
    options.command = command;
    options.target = target;
  });
program.parse(process.argv);

if (options.command === 'scaffold' && options.target) {
  scaffold(options.target);
}