/*
 * grunt-cuked
 *
 *
 * Copyright (c) 2015
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var path = require('path');
  var spawn = require('child_process').spawn;

  grunt.registerMultiTask('cuked', 'Grunt plugin for cuked', function () {
    // Make this task async
    var done = this.async();
    var options = this.options();

    var cukedBin = path.resolve(__dirname, '../node_modules/.bin/cuked');
    var args = [];

    if (options.path) {
      args.push(options.path);
    }

    for (var option in options) {
      args.push('--' + option + '=' + options[option]);
    }

    var cuked = spawn(cukedBin, args);
    cuked.stdout.on('data', function(data) {
      process.stdout.write(data.toString());
    });

    cuked.stderr.pipe(process.stdout);

    cuked.on('exit', function(code) {
      if (code === 0) {
        done(true);
      } else {
        done(false);
      }
    });

    cuked.on('close', function(code) {
      if (code === 0) {
        done(true);
      } else {
        done(false);
      }
    });
  });

};
