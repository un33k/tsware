'use strict';

var plum = require('gulp-plumber');
var utils = require('gulp-util');
var Builder = require('systemjs-builder');
var tsc = require('gulp-typescript');
var cfg = require('./config');


var plumber = function () {
	return plum({
		errorHandler: function (err) {
			utils.log(err.message);
			this.emit('end');
		}
	});
};

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript')
});

var ng2LibBuilder = new Builder({
	defaultJSExtensions: true,
	paths: cfg.ng.vendorPaths,
	meta: cfg.ng.libMeta,
});

var ng2AppBuilder = new Builder({
	defaultJSExtensions: true,
  baseURL: cfg.dir.tmpDir,
  meta: cfg.ng.appMeta
});

var ng2Build = function (path) {
	var ret, name, dest;
	cfg.ng.ng2Modules.forEach(function (mod) {
		name = 'angular2/' + mod;
		dest = path + mod + cfg.ext.js;
		ret = ng2LibBuilder.build(name, dest, {});
	});
	return ret;
};

var tsdTransform = function (path) {
	return '/// <reference path="../..' + path + '" />';
};

var jsTransform = function (path) {
	return '<script src="/lib/' + path.split('/').pop() + '"></script>';
};

var cssTransform = function (path) {
	return '<link rel="stylesheet" type="text/css" href="' + path + '">';
};

module.exports = {
	plumber: plumber,
	ng2LibBuilder: ng2LibBuilder,
	ng2AppBuilder: ng2AppBuilder,
	ng2Build: ng2Build,
	tsProject: tsProject,
	tsdTransform: tsdTransform,
	jsTransform: jsTransform,
	cssTransform: cssTransform
};
