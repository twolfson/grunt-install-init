module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    'install-init': {
      'install-init-test': 'test/test_file'
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