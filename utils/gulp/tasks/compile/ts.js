'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var tsc = require('gulp-typescript');
var cfg = require('../../config').typescript;

help(gulp);

// Transpile typescript app files
gulp.task('ts:tsc', '-- Transpile App\'s typescript & fefs files', function () {
  var source = [
    cfg.files.ts.wildcard.app,
    cfg.files.ts.wildcard.lib
  ];

  return gulp.src(source)
             .pipe(tsc(cfg.options.ts.transpile))
             .js.pipe(gulp.dest(cfg.dirs.tmp.src.js));
});

// Transpile typescript files
gulp.task('ts:tsc-test', '-- Transpile test\'s typescript & fefs files', function () {
  var source = [
    cfg.files.ts.wildcard.test
  ];

  return gulp.src(source)
             .pipe(tsc(cfg.options.ts.transpile))
             .js.pipe(gulp.dest(cfg.dirs.tmp.test.js));
});
