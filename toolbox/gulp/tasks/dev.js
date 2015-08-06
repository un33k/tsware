'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var join = require('path').join;
var watch = require('gulp-watch');
var runseq = require('run-sequence');
var cfg = require('../config');

gulp.task('build:dep:dev', "-- Build dependencies, development version.", function () {
  return gulp.src(cfg.lib.ol).pipe(gulp.dest(cfg.dist.dev.libDir));
});

gulp.task('build:lib:dev', "-- Build libraries, development version.", function (fcb) {
  runseq(['build:dep:dev', 'build:ng2:dev'], fcb);
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
  runseq(['html:copy', 'style:copy'], 'inject:js:index:dev', fcb);
});

gulp.task('build:app:dev', "-- Build application, development version.", function (fcb) {
  runseq('clean:app:dev', ['build:assets:dev', 'tsc:app'], fcb);
});

gulp.task('build:dev', "-- Build everything, development version.", function (fcb) {
  runseq('clean:all:dev', 'build:lib:dev', 'build:app:dev', fcb);
});


gulp.task('serve:dev', "-- Build dev fully and serve, then watch and rebuild application.", function (fcb) {
  runseq('build:dev');
  watch('./src/**', function (fcb) {
    runseq('build:app:dev');
  });
});
