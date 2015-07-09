'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    clean       = require('gulp-clean'),
    Config      = require('../gulp.cfg');

var config = new Config();

// Remove generated files
gulp.task('clean', function () {
  var GeneratedFiles = [
    config.distDir,
    config.generatedJavaScriptFiles,
    config.generatedJavaScriptFiles
  ];
  return gulp.src(GeneratedFiles, {read: false}).pipe(clean());
});
