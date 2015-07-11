'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var tsc = require('gulp-typescript');
var cfg = require('../../config').typescript;

help(gulp);

// Transpile typescript files
gulp.task('ts:transpile', '-- Transpile Typescript & Refs files', function () {
  var source = [
    cfg.files.refs.lib,
    cfg.files.refs.app,
    cfg.files.refs.custom,
    cfg.files.ts.wildcard.app
  ];

  return gulp.src(source)
             .pipe(tsc(cfg.options.ts.transpile))
             .js.pipe(gulp.dest(cfg.dirs.tmp.src.js));
});
