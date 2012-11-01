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

  // Load in grunt-contrib-clean (copied due to npm and base complications)
  grunt.registerMultiTask("clean", "Clear files and folders", function() {
    var paths = grunt.file.expand(this.file.src);

    paths.forEach(function(path) {
      grunt.log.write('Cleaning "' + path + '"...');
      try {
        require("rimraf").sync(path);
        grunt.log.ok();
      } catch (e) {
        grunt.log.error();
        grunt.verbose.error(e);
        grunt.fail.warn("Clean operation failed.");
      }
    });
  });

  // Run project task then tests.
  grunt.registerTask('default', 'install-init test clean');
};