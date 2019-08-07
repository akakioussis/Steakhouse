// function gulp(cb) {

//     cb();
// }

// gulp.task('build', function () {
//     gulp.src('./src')
//         .pipe(gulp.dest('./dist'));
// });
////////////////////////
// const gulp = require('gulp')

// gulp.task('build', async function () {
//     gulp.src('./src/**')
//         .pipe(gulp.dest('./dist'));
// });

var netlify = require('gulp-netlify')
gulp.task('deploy', function () {
    gulp.src('./public/**/*')
        .pipe(netlify({
            site_id: bd6fe4e5 - e6a8 - 407 c - 8 f0a - eec4ef049526,
            access_token: 1 ec41dca23e218fa493a1344eb9ff6f019ce17421f4cd045456c173c50ecac18


        }))
})