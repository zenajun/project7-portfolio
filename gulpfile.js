const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("styles", () => {
  return gulp
    .src("./dev/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1")
    )
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./public/styles"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", () => {
  return gulp
    .src("./dev/scripts/index.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(gulp.dest("./public/scripts"))
    .pipe(browserSync.stream());
});

gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./dev/styles/**/*.scss", gulp.series("styles"));
  gulp.watch("./dev/scripts/**/*.js", gulp.series("scripts"));
  gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("styles", "scripts", "watch"));
