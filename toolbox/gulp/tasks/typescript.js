'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var lint = require('gulp-tslint');
var size = require('gulp-size');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var utils = require('../utils');
var cfg = require('../config');


gulp.task('tsc:app', "-- Transpiles app's typescript files.", function () {
  var source = [
    cfg.ts.globs.app,
    cfg.ts.globs.lib,
  ];
  return gulp.src(source)
    .pipe(utils.plumber())
    .pipe(tsc(utils.tsProject))
    .js.pipe(gulp.dest(cfg.dist.dev.baseDir))
    .pipe(size({ title: "Generated javascript files" }));
});

gulp.task('tsl:app', "-- Lints app's typescript files.", function () {
  return gulp
    .src(cfg.ts.globs.app)
    .pipe(utils.plumber())
    .pipe(lint())
    .pipe(lint.report('verbose'));
});

gulp.task('tsg:refs', "-- Generates app's typescript references file.", function () {
  var target = gulp.src(cfg.ts.refs.appFile);
  var sources = gulp.src([cfg.ts.globs.app], { read: false });
  var options = {
    starttag: '//{',
    endtag: '//}',
    transform: function (path) {
      return '/// <reference path="../..' + path + '" />';
    }
  }
  return target
    .pipe(inject(sources, options))
    .pipe(gulp.dest(cfg.ts.typings.baseDir));
});
