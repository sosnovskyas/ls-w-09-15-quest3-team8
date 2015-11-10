var gulp = require('gulp');
var config = require('../config').devBackend;
var browserSync  = require('browser-sync');

gulp.task('dev-backend', function () {
    gulp.src(config.src)
      .pipe(gulp.dest(config.dest))
      .pipe(browserSync.reload({stream: true}))
    ;
});
