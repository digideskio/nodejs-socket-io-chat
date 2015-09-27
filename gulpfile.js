// Author : Chathu Vishwajith
// Licence : MIT License
// http://opensource.org/licenses/MIT

var gulp = require('gulp'),
nodemon = require('gulp-nodemon');

gulp.task('serve',function(){
	nodemon({
		script: 'index.js',
		ext:'js',
		env:{
			PORT : 5000
		},
		ignore:['./node_modules/**']
	});
});