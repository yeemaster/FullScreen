var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var minifycss = require('gulp-minigy-css');

gulp.task('rjs',function() {
	return gulp.src('./src/js/**/*.*').pipe(uglify()).pipe(gulp.dest('./dist/js/'));
});

gulp.task('yscss',function(){
    return gulp.src('./src/css/*.css').pipe(minifycss()).pipe(gulp.dest('./dist/css/'));
});

gulp.task('cphtml',function(){
	return gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
});

gulp.tast('browser-sync',function(){
    browserSync.init({
    	server:{
    		baseDir:'./dest/'
    	}
    });

    gulp.watch('./src/js/**/*.js',['rjs']);
    gulp.watch('./src/css/**/*.css',['yscss']);
    gulp.watch('./src/**/*.html',['cphtml']);
    gulp.watch('./dist/**/*.*').on('change',browserSync.reload);
});

gulp.task('default',['browser-sync']);