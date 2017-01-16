var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function()  {
    gulp.src("assets/css/main.scss")
     .pipe(sass())
     .pipe(gulp.dest("assets/css"));    
});