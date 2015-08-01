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
	paths: cfg.ng.vendorPaths,
	meta: cfg.ng.libMeta,
});

var ng2AppBuilder = new Builder({
  baseURL: cfg.dir.tmpDir,
  meta: cfg.ng.appMeta
});

module.exports = {
	plumber: plumber,
	ng2LibBuilder: ng2LibBuilder,
	ng2AppBuilder: ng2AppBuilder,
	tsProject: tsProject
};
