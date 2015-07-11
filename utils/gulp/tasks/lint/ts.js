'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var lint = require('gulp-tslint');
var cfg = require('../../config').typescript;

help(gulp);

// Lint all app related *.ts files.
gulp.task('ts:lint', '-- Lint Typescript files', function () {
  return gulp
      .src(cfg.files.ts.wildcard.app)
      .pipe(lint())
      .pipe(lint.report('verbose'));
});