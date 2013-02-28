module.exports = function (grunt) {
  var userDir = grunt.file.userDir;

  // If there is no grunt.file.userDir, hackishly grab it from grunt-init
  if (!userDir) {
    // Cannot resolve since there is no `main` in grunt-init
    // var gruntInitPath = require.resolve('grunt-init');

    // We could use https://github.com/gruntjs/grunt/blob/master/lib/grunt/task.js#L369-L371
    // but that is not easily exposed either

    // Hardcoding lookup as grunt could do.
    var initHelpersPath = __dirname + '/../node_modules/grunt-init/tasks/lib/helpers.js';

    // Load in helpers and save userDir
    var initHelpers = require(initHelpersPath).init(grunt);
    userDir = initHelpers.userDir;
  }

  // Return userDir
  return userDir;
};