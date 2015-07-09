'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    file        = require('gulp-file'),
    tslint      = require('gulp-tslint'),
    inject      = require('gulp-inject'),
    tsc         = require('gulp-typescript'),
    sourcemaps  = require('gulp-sourcemaps'),
    Config      = require('../gulp.cfg');

var config = new Config();

// Compile *.ts files while including refs to libs & app.d.ts
gulp.task('ts:compile', function () {
  var sourceTsFiles = [
    config.bootstrapFile,
    config.allAppTypeScripts,  
    config.libTsDefFiles,
    config.libTsDefListFile,
    config.appTsDefListFile
  ];

  var tsResult = gulp.src(sourceTsFiles)
      .pipe(sourcemaps.init())
      .pipe(tsc({
        typescript: require('typescript'),
        declarationFiles: false,
        noExternalResolve: true,
        target: "es5",
        module: "commonjs",
        experimentalDecorators: true,
        emitDecoratorMetadata: true
      }));

  tsResult.dts.pipe(gulp.dest(config.distDir));
  return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.distDir));
});

// Create a single reference ts file (app.d.ts), using all app *.ts files
gulp.task('ts:refs', function () {
    var target = gulp.src(config.appTsDefListFile);
    var sources = gulp.src([
        config.bootstrapFile,
        config.allAppTypeScripts
      ],{read: false});
    file(config.appTsDefListFile, '//{\n//}', {src: true}).pipe(gulp.dest(config.baseDir));
    return target.pipe(inject(sources, {
        starttag: '//{',
        endtag: '//}',
        transform: function (filepath) {
            return '/// <reference path="../..' + filepath + '" />';
        }
    })).pipe(gulp.dest(config.typingsDir));
});

// Lint all app related *.ts files.
gulp.task('ts:lint', function () {
  return gulp.src(config.allTypeScripts)
      .pipe(tslint())
      .pipe(tslint.report('prose'));
});
