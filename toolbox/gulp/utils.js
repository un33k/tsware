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

var ng2AppBuilder = new Builder({
	defaultJSExtensions: true,
  baseURL: cfg.dir.tmpDir,
  meta: cfg.ng.appMeta
});

var tsdTransform = function (path) {
	return '/// <reference path="../../..' + path + '" />';
};

var cssTransform = function (path) {
	return '<link rel="stylesheet" type="text/css" href="' + path + '">';
};

var exclude = function (path) {
	return '!' + path;
};

module.exports = {
	plumber: plumber,
	ng2AppBuilder: ng2AppBuilder,
	tsdTransform: tsdTransform,
	cssTransform: cssTransform,
	exclude: exclude
};
