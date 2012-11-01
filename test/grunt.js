module.exports = function (grunt) {

  // Project configuration.
  var initDir = grunt.file.userDir('tasks/init');
  grunt.initConfig({
    'install-init': {
      'installInitTestTemplate': 'test_files'
    },
    clean: {
      'install-init': [initDir + 'installInitTestTemplate.js', initDir + 'installInitTestTemplate']
    },
    test: {
      all: '*_test.js'
    }
  });

  // Load local tasks.
  grunt.loadTasks('../tasks');

  // Run project task then tests.
  grunt.registerTask('default', 'install-init test clean');
};