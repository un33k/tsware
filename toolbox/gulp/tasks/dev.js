'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var utils = require('../utils');
var size = require('gulp-size');
var cfg = require('../config');

gulp.task('dev.ng2.build', function () {
	var ret, name, path;
	cfg.ng.modules.forEach(function (mod) {
		name = 'angular2/' + mod;
		path = cfg.dist.dev.libDir + mod + cfg.ext.js;
		ret = utils.ng2LibBuilder.build(name, path, {});
		console.log(utils.ng2LibBuilder)
	});
	ret;
});

