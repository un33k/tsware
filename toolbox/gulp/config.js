'use strict';

var DIR = {
  rootDir: './',
  distDir: './dist/',
  tmpDir: './.staging/',
  appDir: './src/app/',
  testDir: './src/test/',
  gulpDir: './toolbox/gulp/',
  typingsDir: './toolbox/typings/'
};

var GULP = {
  baseDir: DIR.gulp,
  tasksDir: DIR.gulp + 'tasks/',
  cfgFile: DIR.gulpDir + 'config.js'
};

var DIST = {
  baseDir: DIR.distDir,
  dev: {
    baseDir: DIR.distDir + 'dev/',
    libDir: DIR.distDir + 'dev/lib/',
    imgDir: DIR.distDir + 'dev/img/',
    styleDir: DIR.distDir + 'dev/style/'
  },
  prod: {
    baseDir: DIR.distDir + 'prod',
    libDir: DIR.distDir + 'prod/lib/',
    imgDir: DIR.distDir + 'prod/img/',
    styleDir: DIR.distDir + 'dev/style/'
  }
};

var TYPESCRIPT = {
  typings: {
    baseDir: DIR.typingsDir,
  },
  refs: {
    libFile: 'toolbox/typings/tsd.d.ts',
    appFile: 'toolbox/typings/app.d.ts',
    customFile: 'toolbox/typings/custom.d.ts'
  },
  globs: {
    app: 'src/app/**/*.ts',
    test: 'src/test/**/*.ts',
    lib: 'toolbox/typings/**/*.ts'
  },
};

var IMAGE = {
  baseDir: DIR.appDir + 'img/',
  src: [
    DIR.appDir + 'img/**/*',
  ],
};

module.exports = {
  dir: DIR,
  gulp: GULP,
  dist: DIST,
  ts: TYPESCRIPT,
  img: IMAGE
};
