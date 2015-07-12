'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var inject = require('gulp-inject');
var cfg = require('../config').typescript;

help(gulp);

// Create a single reference ts file (app.d.ts), using all app *.ts files
gulp.task('refs:app', '-- Generate App\'s Typescript references file', function () {

    var target = gulp.src(cfg.files.refs.app);
    var sources = gulp.src([cfg.files.ts.globs.app], {read: false});

    return target
      .pipe(inject(sources, cfg.options.ts.refs.inject))
      .pipe(gulp.dest(cfg.dirs.typings));
      
});
