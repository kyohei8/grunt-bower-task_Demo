module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg  : grunt.file.readJSON("package.json"),
    bower: {
      install: {
        options: {
          targetDir     : './lib',
          layout: 'byType',
          //layout: 'byComponent',
          //layout        : function (type, component) {
          //  if (type === 'css') {
          //    return 'css';
          //  } else {
          //    return 'js';
          //  }
          //},
          install       : true,
          verbose       : false,
          cleanTargetDir: true,
          cleanBowerDir : false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower-task');
};
