var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");

gulp.task("sass", function(cb)  {
    gulp.src("assets/css/main.scss")
     .pipe(sass())
     .pipe(gulp.dest("assets/css"));   
     cb(); 
});


gulp.task("sass:watch", function () {
  gulp.watch("assets/css/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass:watch"]);
