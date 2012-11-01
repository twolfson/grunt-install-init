module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    'install-init': {
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
  grunt.registerTask('default', 'install-init test');
};