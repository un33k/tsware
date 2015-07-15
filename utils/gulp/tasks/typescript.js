'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var lint = require('gulp-tslint');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var plumber = require('../utils').plumber;
var cfg = require('../config');

help(gulp);

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript')
});

gulp.task('tsc:app', "Transpiles app's typescript files", function () {
  var source = [
    cfg.ts.globs.app,
    cfg.ts.globs.lib,
  ];
  return gulp.src(source)
    .pipe(plumber())
    .pipe(tsc(tsProject))
    .js.pipe(gulp.dest(cfg.dist.dev.baseDir));
});

gulp.task('tsl:app', "Lints app's typescript files", function () {
  return gulp
    .src(cfg.ts.globs.app)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.report('verbose'));
});

gulp.task('tsg:refs', "Generates app's typescript references file", function () {
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
