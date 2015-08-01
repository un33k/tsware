'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var utils = require('../utils');
var size = require('gulp-size');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');
var cfg = require('../config');

gulp.task('build:lib:dev', "-- Build libs, development version.", function () {
  utils.ng2SetBuildEnv(cfg.dist.dev.libDir);
  return gulp.src(cfg.lib.ol)
    .pipe(gulp.dest(cfg.dist.dev.libDir));
});

gulp.task('inject:js:index:dev', "-- Inject libs path into index.html", function () {

  var target = gulp.src(cfg.html.indexFile);
  var libs = gulp.src(cfg.lib.ol, { read: false });
  var options = {
    starttag: cfg.block.index.js.start,
    endtag: cfg.block.index.js.end,
    transform: utils.jsTransform
  }
  return target
    .pipe(inject(libs, options))
    .pipe(gulp.dest(cfg.dist.dev.htmlDir));
});


gulp.task('build:assets:dev', "-- Build assets, development version.", function (fcb) {
  runSequence(['html:copy', 'style:copy'], 'inject:js:index:dev', fcb);
});
