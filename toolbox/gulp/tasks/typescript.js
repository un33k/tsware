'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var lint = require('gulp-tslint');
var size = require('gulp-size');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var utils = require('../utils');
var cfg = require('../config');


gulp.task('tsc:app', "-- Transpiles app's typescript files.", function () {
  var tsProject = tsc.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
  var source = [
    cfg.ts.globs.app,
    cfg.ts.globs.lib,
  ];
  var result = gulp.src(source)
    .pipe(utils.plumber())
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));

  return result.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cfg.dist.dev.appDir))
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
    starttag: cfg.block.tsd.start,
    endtag: cfg.block.tsd.end,
    transform: utils.tsdTransform
  }
  return target
    .pipe(inject(sources, options))
    .pipe(gulp.dest(cfg.ts.typings.customDir));
});
