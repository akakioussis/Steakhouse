// function gulp(cb) {

//     cb();
// }

// gulp.task('build', function () {
//     gulp.src('./src')
//         .pipe(gulp.dest('./dist'));
// });
const gulp = require('gulp')

gulp.task('build', async function () {
    gulp.src('./src/**')
        .pipe(gulp.dest('./dist'));
});