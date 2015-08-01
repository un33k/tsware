'use strict';

var gulp = require('gulp');
var utils = require('../utils');
var cfg = require('../config');


gulp.task('build:ng2:dev', "-- Setup build object for `dev` environment.", function () {
	return utils.ng2Build(cfg.dist.dev.libDir);
});
