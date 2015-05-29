var gulp 	= require('gulp'),
  	connect = require('gulp-connect');
  	opn 	= require('opn');
 
// Server start with livereload
gulp.task('connect', function() {
  connect.server({
  	root:'app',
  	livereload: true,
  	port: 8888
  });
  opn('http://localhost:8888');
});
 
// work with HTML
gulp.task('html', function() {
  	gulp.src('./app/*.html')
  	.pipe(connect.reload());
});

// work with CSS
gulp.task('css', function() {
  	gulp.src('./app/css/*.css')
  	.pipe(connect.reload());
});

// work with JS
gulp.task('js', function() {
  	gulp.src('./app/js/*.js')
  	.pipe(connect.reload());
});

// watching
gulp.task('watch', function() {
  	gulp.watch(['./app/*.html'],['html']);
  	gulp.watch(['./app/css/*.css'],['css']);
  	gulp.watch(['./app/js/*.js'],['js']);
});

// default task
gulp.task('default', ['connect','watch']);