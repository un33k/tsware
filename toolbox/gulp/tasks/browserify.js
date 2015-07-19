'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var plumber = require('../utils').plumber;
var size = require('gulp-size');
var cfg = require('../config');


gulp.task('browserify:app', function() {
  return browserify('dev/bootstrap.js')
  .pipe(browserify({
    insertGlobals: true,
    debug: false
  }))
  // Bundle to a single file
  .pipe(concat('bundle.js'))
  // Output it to our dist folder
  .pipe(gulp.dest('dist/js'));
});
