const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

// Compile sass into css
const style = () => {
  
  return gulp.src('./styles/**/*.sass')
  .pipe(sass({ outputStyle: 'compressed' }).on('error',sass.logError))
  .pipe(gulp.dest('./styles'))
  .pipe(browserSync.stream())

}

const watch = () => {

  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch('./styles/**/*.sass', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./scripts/**/*.js').on('change', browserSync.reload)
}



exports.style = style
exports.watch = watch