'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    help        = require('gulp-help'),
    clean       = require('gulp-clean'),
    Config      = require('../gulp.cfg');

help(gulp);
var config = new Config();

// Remove generated files
gulp.task('clean', '-- Clean generated files', function () {
  var GeneratedFiles = [
    config.distDir,
    config.generatedJavaScriptFiles,
    config.generatedJavaScriptFiles
  ];
  return gulp.src(GeneratedFiles, {read: false}).pipe(clean());
});
