var gulp = require ('gulp');
var compass = require('gulp-compass');
var path = require('path');
var config = require('../config').devCompass;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

gulp.task('dev-compass', function() {
  gulp.src(config.src)
    .pipe(compass({
      css: config.dest,
      sass: config.sass,
      image: config.image,
      generated_images_path: config.generated_images_path,
      sourcemap: config.sourcemap
    }))
    .on('error', function(error) {
      // Would like to catch the error here
      console.log(error);
      this.emit('end');
    })
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}))
 ;
});