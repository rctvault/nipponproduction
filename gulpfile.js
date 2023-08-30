const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const cssnano = require("gulp-cssnano");
//const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require('gulp-uglify-es').default;
const babel = require("gulp-babel");


gulp.task("sass", function(done){
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
  //  .pipe(rename("./styles.min.css"))
    .pipe(rename(function(path){
      if(!path.extname.endsWith(".map")){
      path.basename +=".min"
    }
    }))
    .pipe(gulp.dest('./css'));
  done();
});


// JAVASCRIPT

	gulp.task('vendor', function(done) {
				return(
			gulp.src([
			// './node_modules/bootstrap/dist/js/bootstrap.js',
      './node_modules/jquery/dist/jquery.min.js',
      // './node_modules/slick-carousel/slick/slick.min.js',
      './node_modules/gsap/dist/gsap.min.js',
      './node_modules/gsap/dist/ScrollTrigger.min.js',
			])

		    .pipe(concat("vendor.js"))
			.pipe(uglify())
			.pipe(gulp.dest("./js") )
		)
		done();
	});


gulp.task("jsTask", function(done){
    return gulp.src([
      './src/js/scripts.js'])
      .pipe(babel({
        presets: ["@babel/env"]
      }))
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
  done();
});




gulp.task("watch", function(){

  browserSync.init({
    server: {
        baseDir: "./"
    },
    browser: "google chrome"
  })
  // gulp.watch([
  //   './src/scss/**/*.scss',
  //   '**/*.html',
  //   './src/js/**/*.js'
  // ], gulp.series(["sass", "jsTask"]))
  // .on("change", browserSync.reload);
  gulp.watch('./src/scss/**/*.scss', gulp.task("sass")).on("change", browserSync.reload);
  gulp.watch('./src/js/**/*.js', gulp.task("jsTask")).on("change", browserSync.reload);
  gulp.watch('**/*.html').on("change", browserSync.reload);
});
