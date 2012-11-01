/*
 * {%= full_name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('{%= short_name %}', 'Your task description goes here.', function() {
    // Collect the filepaths we need
    var file = this.file,
        data = this.data,
        src = file.src,
        srcFiles = grunt.file.expand(src),
        dest = file.dest;

    // Concatenate the srcFiles, process the blob through our helper,
    var separator = data.separator || '\n',
        srcBlob = grunt.helper('concat', srcFiles, {separator: separator});
        content = grunt.helper('{%= short_name %}', srcBlob);

    // Write out the content
    grunt.file.write(dest, content);

    // Fail task if errors were logged.
    if (this.errorCount) { return false; }

    // Otherwise, print a success message.
    grunt.log.writeln('File "' + this.file.dest + '" created.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('{%= short_name %}', function (content) {
    return content;
  });

};
