const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const label = require('gulp-babel');
const concat = require('gulp-concat');
gulp.task('default', () => {
    return gulp.src('app/*.JSX').pipe(sourcemaps.init)
        .pipe(babel({
            presets: ['es2015', 'react']
        })).pipe(concat('all.js'))
        .pipe(sourcemaps.write('.')).pipe(gulp.dest('dest'))
});