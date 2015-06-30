'use strict';

var gulp       = require('gulp'),
    debug      = require('gulp-debug'),
    inject     = require('gulp-inject'),
    tsc        = require('gulp-typescript'),
    tslint     = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    clean      = require('gulp-clean'),
    Config     = require('./gulp.cfg');

var config = new Config();

// Creates a single ref file (app.d.ts), using all app *.ts files
gulp.task('generate-app-tsrefs', function () {
  var target  = gulp.src(config.appTsDefListFile);
  var sources = gulp.src([config.allAppTypeScripts], {read: false});
  return target.pipe(inject(sources, {
    starttag : '//{',
    endtag   : '//}',
    transform: function (filepath) {
      return '/// <reference path="../..' + filepath + '" />';
    }
  })).pipe(gulp.dest(config.typingsDir));
});

// Lints all app *.ts files.
gulp.task('lint-ts', function () {
  return gulp.src(config.allTypeScripts)
      .pipe(tslint())
      .pipe(tslint.report('prose'));
});


// Compiles *.ts files while including refs to libs & app.d.ts
gulp.task('compile-app-ts', function () {
  var sourceTsFiles = [
    config.allAppTypeScripts,  
    config.libTsDefFiles,
    config.libTsDefListFile,
    config.appTsDefListFile
  ];

  var tsResult = gulp.src(sourceTsFiles)
      .pipe(sourcemaps.init())
      .pipe(tsc({
        target           : 'ES5',
        module           : 'commonjs',
        declarationFiles : false,
        noExternalResolve: true
      }));

  tsResult.dts.pipe(gulp.dest(config.distDir));
  return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.distDir));
});

// Removes compilation artifacts (*.js)
gulp.task('clean-ts', function () {
  var GeneratedFiles = [
    config.distDir,
    config.generatedJavaScriptFiles,
    config.generatedJavaScriptFiles
  ];
  return gulp.src(GeneratedFiles, {read: false}).pipe(clean());
});

// Watches for file changes
gulp.task('watch', function() {
    gulp.watch([config.typescript_def_libs], [
      // 'lint-ts',
      'compile-app-ts',
      'generate-app-tsrefs'
    ]);
});

// Sets default behavior for the gulp command
gulp.task('default', [
  // 'lint-ts',
  'compile-app-ts',
  // 'generate-app-tsrefs',
  // 'watch'
]);
