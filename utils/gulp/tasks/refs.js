'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    help        = require('gulp-help'),
    file        = require('gulp-file'),
    tslint      = require('gulp-tslint'),
    inject      = require('gulp-inject'),
    tsc         = require('gulp-typescript'),
    sourcemaps  = require('gulp-sourcemaps'),
    cfg      		= require('../config').typescript;

help(gulp);

// Create a single reference ts file (app.d.ts), using all app *.ts files
gulp.task('ts:refs', '-- Generate App\'s Typescript reference files', function () {

    var target = gulp.src(cfg.files.refs.app);
    var sources = gulp.src([cfg.files.ts.wildcard.app], {read: false});

    return target
      .pipe(inject(sources, cfg.options.ts.refs.inject))
      .pipe(gulp.dest(cfg.dirs.typings));
      
});
