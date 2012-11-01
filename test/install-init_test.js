var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['install-init'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'multiTask': function(test) {
    // Locate {{user directory}}/tasks/init
    var path = require('path'),
        initDir = grunt.file.userDir('tasks/init');

    // Collect the files to assert existence of
    var srcFiles = grunt.file.expandFiles({'dot': true}, 'test_files/**');

    // There will be one assertion per file and one in the end for any errors
    test.expect(srcFiles.length);
console.log(srcFiles);
    // Iterate over each file
    srcFiles.forEach(function (srcFile) {
      // Remove test_files from srcFile
      var _srcFile = srcFile.replace('test_files', ''),
          destFile = path.join(initDir, _srcFile);

      // Read in ours and their file
      var expectedContent = grunt.file.read(srcFile),
          actualContent = grunt.file.read(destFile);

      // Assert that they are the same
      test.equal(actualContent, expectedContent, srcFile + ' did not match ' + destFile);
    });

    // Callback now that the test is done
    test.done();
  }
};
