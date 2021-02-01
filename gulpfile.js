const {
    src,
    dest,
    watch,
    task,
    series
} = require('gulp');
const validator = require('gulp-html');
const babel = require('gulp-babel');
const concat = require("gulp-concat");
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');


task('js', function() {
    return src('assets/js/*.js')
        .pipe(concat("app"))
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('build/js'));
})

task('vendor', function() {
    return src(['bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/screenfull/dist/screenfull.min.js',
            'bower_components/jquery.cookie/jquery.cookie.js',
            'bower_components/audiojs/audiojs/audio.min.js'
        ])
        .pipe(concat("vendor"))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('build/js'));
})

task('css', function() {
    return src(['assets/css/*.css', 'bower_components/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('bundle.css'))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('build/css'));
});

task('watch:css', function() {
    watch('assets/css/*.css', series(['css']));
})