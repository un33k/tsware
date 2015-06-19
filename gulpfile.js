'use strict';

// generics requires
var del = require('del');

// gulp related requires
var gulp = require('gulp');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var gulp_cfg = new require('./gulp.cfg')();

// Creates a single ref file (app.d.ts), using all app *.ts files
gulp.task('refs-ts', function () {
  var target = gulp.src(gulp_cfg.typescript_def_libs);
  var sources = gulp.src([gulp_cfg.typescript_wildcards], {read: false});
  return target.pipe(inject(sources, {
    starttag: '//{',
    endtag: '//}',
    transform: function (filepath) {
      return '/// <reference path="../..' + filepath + '" />';
    }
  })).pipe(gulp.dest(gulp_cfg.types_dir));
});

// Lints all app *.ts files.
gulp.task('lint-ts', function () {
  return gulp.src(gulp_cfg.typescript_wildcards)
    .pipe(tslint())
    .pipe(tslint.report('prose'));
});

// Compiles *.ts files while including refs to libs & app.d.ts
gulp.task('compile-ts', function () {
  var sourceTsFiles = [
    gulp_cfg.typescript_def_libs, //path to *.ts files
    gulp_cfg.typescript_def_libs, //reference to lib *.d.ts files
    gulp_cfg.typescript_refs_app  //reference to app.d.ts files
  ];
  var tsconfig = tsc({
    target: 'ES5',
    declarationFiles: false,
    noExternalResolve: true
  });
  var tsResult = gulp
    .src(sourceTsFiles)
    .pipe(sourcemaps.init())
    .pipe(tsconfig);

  tsResult.dts.pipe(gulp.dest(gulp_cfg.tsOutputPath));
  return tsResult
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(gulp_cfg.javascript_dir));
});

// Removes compilation artifacts (*.js)
gulp.task('clean-js', function (cb) {
  var typeScriptGenFiles = [
    gulp_cfg.source_app_dir +'**/*.js',     // path to all generated *.js files
    gulp_cfg.source_app_dir +'**/*.js.map'  // path to all generated *.js.map files
    gulp_cfg.javascript_dir,                // path to specific generated *.js files
  ];

  del(typeScriptGenFiles, cb);
});

// Watches for file changes
gulp.task('watch', function() {
    gulp.watch([gulp_cfg.typescript_def_libs], [
      'ts-lint',
      'compile-ts',
      'app-ref-ts'
    ]);
});

// Sets default behavior for the gulp command
gulp.task('default', [
  'lint-ts',
  'compile-ts',
  'refs-ts',
  'watch'
]);
