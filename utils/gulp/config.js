'use strict';

var basic = {
  baseDir: './',
  gulp: {
    tasks: {
      baseDir: 'utils/gulp/tasks'
    }
  }
};

var dist = {
  baseDir: 'dist',
  dev: {
    baseDir: 'dist/dev',
    libDir: 'dist/dev/lib',
  },
  prod: {
    baseDir: 'dist/prod',
    libDir: 'dist/prod/lib'
  }
};

var ts = {
  typings: {
    baseDir: 'utils/typings',
  },
  refs: {
    libFile: 'utils/typings/tsd.d.ts',
    appFile: 'utils/typings/app.d.ts',
    customFile: 'utils/typings/custom.d.ts'
  },
  globs: {
    app: 'src/app/**/*.ts',
    test: 'src/test/**/*.ts',
    lib: 'utils/typings/**/*.ts'
  },
};

module.exports = {
  basic: basic,
  dist: dist,
  ts: ts
};
