'use strict';

var gulp = require('gulp');
var Builder = require('systemjs-builder');
var utils = require('../utils');
var cfg = require('../config');


gulp.task('build:ng2:dev', "-- Setup build object for `dev` environment.", function () {

	var ng2LibBuilder = new Builder({
		defaultJSExtensions: true,
		paths: cfg.ng.vendorPaths,
		meta: cfg.ng.libMeta,
	});

	var ret, name, dest;
	cfg.ng.ng2Modules.forEach(function (mod) {
		name = 'angular2/' + mod;
		dest = cfg.dist.dev.libDir + mod + cfg.ext.js;
		ret = ng2LibBuilder.build(name, dest, {});
		});
	return ret;

});
