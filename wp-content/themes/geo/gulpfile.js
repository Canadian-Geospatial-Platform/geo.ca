const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const autoprefixer = require( 'gulp-autoprefixer' );
const livereload = require( 'gulp-livereload' );
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require( 'gulp-clean-css' );
const minify = require( 'gulp-minify' );
var rename = require( 'gulp-rename' );

const cssInput = './assets/css/scss/**/*.scss';
const cssOutput = './assets/css';

const sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

const minifyOptions = {
    ext:{
        min:'.min.js'
    },
    noSource: true,
};

gulp.task( 'sass', function () {
	return gulp.src( cssInput )
		.pipe( sass( sassOptions ).on( 'error', sass.logError ) )
		.pipe( autoprefixer() )
		.pipe( gulp.dest( cssOutput ) )
		.pipe( cleanCSS() )
		.pipe( rename({ suffix: '.min' }) )
		.pipe( gulp.dest( cssOutput ) );
});

gulp.task( 'reloadCSS', function() {
	return gulp.src( './assets/css/style.css' ).pipe( livereload() );
});

gulp.task( 'watch', function() {
	livereload.listen();

	gulp.watch( cssInput, gulp.series( 'sass', 'reloadCSS' ) ).on( 'change', function( event ) {
		console.log( 'File ' + event + ' changed' );
	});
});

gulp.task( 'default', gulp.series( 'sass', 'reloadCSS', 'watch' ) );