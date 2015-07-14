'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var lint = require('gulp-tslint');
var inject = require('gulp-inject');
var tst = require('gulp-typescript');
var plumber = require('../utils').plumber;
var cfg = require('../config').typescript;

help(gulp);

var tsProject = tst.createProject(gulp.src('../../../tsconfig.json'), {
  typescript: require('typescript')
});

gulp.task('tst:app', 'Transpile App\'s typescript & fefs files', function () {
  var source = [
    cfg.files.ts.globs.app,
    cfg.files.ts.globs.lib
  ];

  return gulp.src(source)
    .pipe(plumber())
    .pipe(tst(cfg.options.ts.transpile))
    .js.pipe(gulp.dest(cfg.dirs.tmp.src.js));
});

gulp.task('tst:test', 'Transpile test\'s typescript & fefs files', function () {
  var source = [
    cfg.files.ts.globs.test
  ];

  return gulp.src(source)
    .pipe(plumber())
    .pipe(tst(tsProject))
    .js.pipe(gulp.dest(cfg.dirs.tmp.test.js));
});

gulp.task('tsl:app', 'Lint App\'s Typescript files', function () {
  return gulp
    .src(cfg.files.ts.globs.app)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.report('verbose'));
});

gulp.task('tsl:test', 'Lint Test\'s Typescript files', function () {
  return gulp
    .src(cfg.files.ts.globs.test)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.report('verbose'));
});

gulp.task('tsg:refs', 'Generate App\'s Typescript references file', function () {

  var target = gulp.src(cfg.files.refs.app);
  var sources = gulp.src([cfg.files.ts.globs.app], { read: false }).pipe(plumber());

  return target.pipe(plumber())
    .pipe(inject(sources, cfg.options.ts.refs.inject))
    .pipe(gulp.dest(cfg.dirs.typings));

});