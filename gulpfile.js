'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/assets/sass/style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('src/assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass'], function () {
    gulp.start('sass:watch');
});
