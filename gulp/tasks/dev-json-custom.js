var gulp = require('gulp');
var config = require('../config').devJsonCustom;

var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

// developer JS
gulp.task('dev-json-custom', function() {
  gulp.src([config.src])
    .pipe(gulp.dest(config.dest))
  ;
});