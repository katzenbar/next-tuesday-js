/*globals require */
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('build', ['jshint'], function () {
  return gulp.src(['src/**/*.js', 'src/index-*.js'])
             .pipe(sourcemaps.init())
             .pipe(babel())
             .pipe(concat('next-tuesday.js'))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest('dist'));
});

gulp.task('test', ['build'], function () {
  return gulp.src(['test/*.js'], { read: false })
             .pipe(mocha({
                reporter: 'spec'
              }))
             .on('error', gutil.log);
});

gulp.task('jshint', ['jshint-src', 'jshint-test']);

gulp.task('jshint-src', function () {
  return gulp.src(['src/**/*.js'])
             .pipe(jshint('src/.jshintrc'))
             .pipe(jshint.reporter('jshint-stylish'))
             .pipe(jshint.reporter('fail'));
});

gulp.task('jshint-test', function () {
  return gulp.src(['test/**/*.js'])
             .pipe(jshint('test/.jshintrc'))
             .pipe(jshint.reporter('jshint-stylish'))
             .pipe(jshint.reporter('fail'));
});

gulp.task('watch', function () {
  var watcher = gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('default', ['test', 'watch']);
