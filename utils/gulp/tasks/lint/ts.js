'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var lint = require('gulp-tslint');
var plumber = require('../../utils').plumber;
var cfg = require('../../config').typescript;

help(gulp);

// Lint all app related *.ts files.
gulp.task('tsl:app', 'Lint App\'s Typescript files', function () {
  return gulp
    .src(cfg.files.ts.globs.app)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.report('verbose'));
});

// Lint all test related *.ts files.
gulp.task('tsl:test', 'Lint Test\'s Typescript files', function () {
  return gulp
    .src(cfg.files.ts.globs.test)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.report('verbose'));
});
