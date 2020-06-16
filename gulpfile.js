const gulp = require("gulp");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const rename = require("gulp-rename");

exports.default = () => {
    gulp.watch("printElements.js", () => {
        gulp.src("printElements.js")
            .pipe(babel({ "presets": ["@babel/env"] }))
            .pipe(uglify())
            .pipe(rename("printElements.min.js"))
            .pipe(gulp.dest("dist/"));
    });
}