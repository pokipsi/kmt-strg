const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync').create();

const jsSRC = 'prevent.js';
const jsDIR = 'src/js/';
const jsDIST = './public/js';
const jsWatch = 'src/js/**/*.js';
const jsFILES = [jsSRC];

gulp.task('build-js', done => {
    jsFILES.map(function(entry) {
        return browserify({
                entries: [jsDIR + entry]
            })
            .transform(babelify, {
                presets: ['@babel/env']
            })
            .bundle()
            .pipe(source(entry))
            .pipe(rename({
                'extname': '.min.js'
            }))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            //.pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(jsDIST))
    });
    done();
});

gulp.task('default', function() {
    browserSync.init({
        server: "./public/"
    });
    gulp.watch(jsWatch, gulp.series('build-js'));
    return;
});