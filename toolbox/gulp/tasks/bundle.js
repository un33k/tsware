'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var plumber = require('../utils').plumber;
var size = require('gulp-size');
var cfg = require('../config');


gulp.task('bundle:app', "-- Bundle all dependancies into a single file.", function () {
  return browserify(cfg.js.app.bundle.entrypoint, { debug: true })
    .bundle()
    .pipe(source(cfg.js.app.bundle.filename))
    .pipe(gulp.dest(cfg.js.app.bundle.outputDir));
});
