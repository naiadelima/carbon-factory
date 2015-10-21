var gulp = require('gulp');
var BuildTask = require('carbon-factory/lib/gulp/build');
var SpecTask = require('carbon-factory/lib/gulp/spec');

gulp.task('default', BuildTask({
  standalone: 'Carbon'
}));

gulp.task('test', SpecTask());
