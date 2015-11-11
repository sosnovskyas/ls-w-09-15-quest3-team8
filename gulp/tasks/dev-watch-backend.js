var gulp = require('gulp');
var config = require('../config').devBackend;

gulp.task('dev-watch-backend', function() {
  gulp.watch(config.watch, ['dev-backend']);
});