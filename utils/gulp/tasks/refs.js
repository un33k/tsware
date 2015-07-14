'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var inject = require('gulp-inject');
var plumber = require('../utils').plumber;
var cfg = require('../config').typescript;

help(gulp);

// Create a single reference ts file (app.d.ts), using all app *.ts files
gulp.task('gen:refs', 'Generate App\'s Typescript references file', function () {

    var target = gulp.src(cfg.files.refs.app);
    var sources = gulp.src([cfg.files.ts.globs.app], {read: false}).pipe(plumber());

    return target.pipe(plumber())
      .pipe(inject(sources, cfg.options.ts.refs.inject))
      .pipe(gulp.dest(cfg.dirs.typings));
      
});
