/*
 * grunt-install-init
 * https://github.com/twolfson/grunt-install-init
 *
 * Copyright (c) 2012 Todd Wolfson
 * Licensed under the MIT license.
 */

var win32 = process.platform === 'win32',
    path = require('path'),
    gruntRetro = require('grunt-retro');
module.exports = function(grunt) {
  // Load and bind grunt-retro
  grunt = gruntRetro(grunt);

  // TODO: Should this be included in grunt-retro?
  // Fallback userDir manually
  grunt.file.userDir = grunt.file.userDir || function () {
    var dirpath = path.join.apply(path, arguments);
    var homepath = process.env[win32 ? 'USERPROFILE' : 'HOME'];
    return path.resolve(homepath, '.grunt-init', dirpath);
  };

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  var path = require('path'),
      rimraf = require('rimraf');
  grunt.registerMultiTask('install-init', 'Installs a grunt init template to the grunt user directory', function() {
    var file = this.file,
        baseDir = file.src,
        pluginName = file.dest,
        srcJS = baseDir + '/' + pluginName + '.js',
        src = baseDir + '/' + pluginName + '/**',
        dest = grunt.file.userDir('tasks/init');

    // Grab the srcDirs and srcFiles
    // TODO: Issue is expandDirs is taking single param and not double -- need to use object.exted
    var srcDirs = grunt.file.expandDirs({'dot': true}, src),
        srcFiles = grunt.file.expandFiles({'dot': true}, src);
    console.log('0');

    // Add srcJS to the head of the srcFiles
    srcFiles.unshift(srcJS);
    console.log('1');

    // Empty each of the srcDirs
    srcDirs.forEach(function (srcDir) {
      // Remove baseDir from srcDir
      srcDir = srcDir.replace(baseDir, '');

      // Empty the directory
      var destDir = path.join(dest, srcDir);
      rimraf.sync(destDir);
    });

    console.log('2');

    // Re-create each of the srcDirs
    srcDirs.forEach(function (srcDir) {
      // Remove baseDir from srcDir
      srcDir = srcDir.replace(baseDir, '');

      // Re-creaate the directory
      var destDir = path.join(dest, srcDir);
      grunt.file.mkdir(destDir);
    });
    console.log('3');

    // Copy over each of the srcFiles
    srcFiles.forEach(function (srcFile) {
      // Remove baseDir from srcFile
      var _srcFile = srcFile.replace(baseDir, '');

      // Copy over the file
      var destFile = path.join(dest, _srcFile);
      grunt.file.copy(srcFile, destFile);
    });
    console.log('4');

    // Fail task if errors were logged.
    if (this.errorCount) { return false; }
    console.log('5');

    // Otherwise, print a success message.
    grunt.log.writeln('Grunt init template "' + pluginName + '" installed.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('install-init', function (content) {
    return content;
  });

};
