module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg  : grunt.file.readJSON("package.json"),
    bower: {
      install: {
        options: {
          targetDir     : './lib',
          layout:'byType',
          /*
          layout        : function (type, component) {
            //targetDir以下に個別のフォルダを作らず、jsとcssのフォルダだけ管理する
            // css以外はすべてjsと判定する
            // 細かい部分はbower.jsonのexportsOverrideで制御する
            if (type === 'css') {
              return 'stylesheets';
            } else {
              return 'javascripts';
            }
          },
          */
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
