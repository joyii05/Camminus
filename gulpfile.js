var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sass = require('gulp-sass');

gulp.task('css', function() {
   return gulp.src('app/assets/sass/main.scss')
       .pipe(sass())
       .pipe(autoprefixer('last 15 versions'))
       //.pipe(minifycss())
       .pipe(gulp.dest('public/css'))
       .pipe(notify({ message: 'sass compilado...' }));
});

gulp.task('watch', function(){
   gulp.watch('app/assets/sass/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);
