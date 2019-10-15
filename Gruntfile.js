/*
 * grunt-inline-css
 * https://github.com/jgallen23/grunt-inline-css
 *
 * Copyright (c) 2013 Greg Allen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    

    // Configuration to be run (and then tested).
    inlinecss: {
      basic: {
        // https://github.com/Automattic/juice/tree/v4.1.0#options
        options: {
          extraCss: 'body { background: green; }',
          preserveImportant: true,
          preserveMediaQueries: true,
          removeStyleTags: false,
        },
        files: {
          'out.html': 'in.html'
        },
      }
    },


  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');


  // By default, lint and run all tests.
  grunt.registerTask('default', ['inlinecss']);
};
