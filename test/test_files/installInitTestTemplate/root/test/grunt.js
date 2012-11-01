module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    '{%= short_name %}': {
      all: {
        src: ['expected/file.js'],
        dest: 'actual/file.js'
      }
    },
    test: {
      all: '*_test.js'
    }
  });

  // Load local tasks.
  grunt.loadTasks('../tasks');

  // Run project task then tests.
  grunt.registerTask('default', '{%= short_name %} test');
};