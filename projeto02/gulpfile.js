const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const terser = require('gulp-terser')
const browsersync = require('browser-sync').create()


//sass Task
function sassUpdate(){
  return src('styles/index.sass', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('styles', { sourcemaps: '.' }));
}

//javscript Task
function jsTask(){
  return src('scripts/index.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('scripts',{ sourcemaps: '.' }))
}

//Browsersync
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  })
  cb()
}

//Browsersync reload
function browsersyncReload(cb){
  browsersync.reload()
  cb()
}

// Watch Task

function watchTask(){
  watch('*.html', browsersyncReload)
  watch(['styles/index.sass','scripts/index.js'], series(sassUpdate,jsTask, browsersyncReload))
}

//Default gulptask
exports.default = series(
  sassUpdate,
  jsTask,
  browsersyncServe,
  browsersyncReload,
  watchTask
)