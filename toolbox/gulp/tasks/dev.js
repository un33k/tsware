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

gulp.task('set:index:dev', "-- Inject libs path into index.html", function () {

  var target = gulp.src(cfg.html.indexFile);
  var libs = gulp.src(cfg.lib.ol, { read: false });
  var options = {
    starttag: '<!-- block:libs:js -->',
    endtag: '<!-- endblock:libs:js -->',
    transform: function (path) {
      return '<script src="' + path + '"></script>';
    }
  }
  return target
    .pipe(inject(libs, options))
    .pipe(gulp.dest(cfg.dist.dev.htmlDir));
});


gulp.task('build:assets:dev', "-- Build assets, development version.", function (fcb) {
  runSequence(['set:libs:path:dev', 'style:copy'], 'html:copy', fcb);
});
