'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var loadtask = require('require-dir');
var cfg = require('./toolbox/gulp/config');

var gulp = require('gulp-help')(gulp, { description: '-- gulp [TASK] [OPTIONS...]' });

loadtask(cfg.dir.gulpDir, { recurse: true });
