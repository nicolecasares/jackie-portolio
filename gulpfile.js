// var gulp = require('gulp');
// var sass = require('gulp-sass');
// gulp.task('sass', function(){
//   return gulp.src('scss/styles.scss')
//     .pipe(sass()) // Using gulp-sass
//     .pipe(sass().on('error', sass.logError))//cheacks for errors
//     .pipe(gulp.dest('css'))
// });


// //below is basic 
// gulp.task('default', function(){
// 	gulp.watch('sass/**/*.scss', ['styles']);
// });

// var gulp 		= require('gulp');
// // var browserSync = require('browser-sync').create();
// var sass 		= require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src(['scss/styles.scss', 'src/scss/*.scss'])
//         .pipe(sass())
//         .pipe(gulp.dest("css"))
        // .pipe(browserSync.stream());
// });
// Move the javascript files into our /src/js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
//         .pipe(gulp.dest("src/js"))
//         .pipe(browserSync.stream());
// });
// Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./src"  
//     });

//     gulp.watch(['scss/styles.scss', 'src/scss/*.scss'], ['sass']);
    // gulp.watch("src/*.html").on('change', browserSync.reload);
// });

// gulp.task('default', ['js','serve']);

//below is basic 
// gulp.task('default', function(){
// 	gulp.watch('sass/**/*.scss', ['styles']);
// });

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(sass().on('error', sass.logError))//cheacks for errors
    .pipe(gulp.dest('styles.css'));
});

//below is basic 
gulp.task('default', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
});


