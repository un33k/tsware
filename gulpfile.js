'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var loadtask = require('require-dir');
var cfg = require('./toolbox/gulp/config');

help(gulp, { aliases: ['h', '?'] });
loadtask(cfg.dir.gulpDir, { recurse: true });
