'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    file        = require('gulp-file'),
    watch       = require('gulp-watch'),
    inject      = require('gulp-inject'),
    tsc         = require('gulp-typescript'),
    tslint      = require('gulp-tslint'),
    sourcemaps  = require('gulp-sourcemaps'),
    clean       = require('gulp-clean'),
    runSequence = require('run-sequence'),
    Config      = require('../gulp.cfg');

var config = new Config();

// Build
gulp.task('prod:build', [
  // 'ts-lint'
  ], function(callback) {
    runSequence(['clean', 'gen-ts-refs'], 'copy', 'compile', callback);
});
