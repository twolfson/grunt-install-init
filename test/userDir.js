module.exports = function (grunt) {
  var userDir = grunt.file.userDir;

  // If there is no grunt.file.userDir, hackishly grab it from grunt-init
  if (!userDir) {
    var gruntInitPath = require.resolve('grunt-init');
    console.log(gruntInitPath);
  }
};