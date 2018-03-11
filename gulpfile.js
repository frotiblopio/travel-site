const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => {
    console.log('glup task');
});

gulp.task('html', () => {
    console.log('somehtig html');
});

gulp.task('styles', () => {
    console.log('somehtig Sass o CSSS');
});

gulp.task('watch', () =>{
    watch('./app/index.html', () => {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('styles');
    });
});