'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var utils = require('../utils');
var size = require('gulp-size');
var inject = require('gulp-inject');
var join = require('path').join;
var runSequence = require('run-sequence');
var cfg = require('../config');

gulp.task('build:lib:dev', "-- Build libs, development version.", function () {
  return gulp.src(cfg.lib.ol).pipe(gulp.dest(cfg.dist.dev.libDir));
});

gulp.task('inject:js:index:dev', "-- Inject libs path into index.html.", function () {
  var libs = cfg.lib.ol.map(function (path) {
    return join(cfg.dist.dev.libDir, path.split('/').pop());
  });
  cfg.ng.ng2Modules.forEach(function (mod) {
    libs.push(join(cfg.dist.dev.libDir + mod + cfg.ext.js))
  });
  var target = gulp.src(cfg.html.indexFile);
  var source = gulp.src(libs, { read: false });
  var options = {
    starttag: cfg.block.index.js.start,
    endtag: cfg.block.index.js.end,
    transform: function (path) {
      return '<script src="/lib/' + path.split('/').pop() + '"></script>';
    }
  }
  return target
    .pipe(inject(source, options))
    .pipe(gulp.dest(cfg.dist.dev.htmlDir));
});

gulp.task('build:assets:dev', "-- Build assets, development version.", function (fcb) {
  runSequence(['html:copy', 'style:copy'], 'inject:js:index:dev', fcb);
});

gulp.task('build:app:dev', function (done) {
  runSequence('clean:app:dev', 'build:assets:dev', done);
});