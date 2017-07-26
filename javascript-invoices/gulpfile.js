var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
    gulp.src('public/dist/App.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('public/dist/'))
});

gulp.task("compile", function(){
    return gulp.src("public/react/*.jsx").
        pipe(babel({
            presets: ["es2015", "react"]
        })).
        pipe(gulp.dest("public/dist/"));
});

gulp.task('default', ['compile', 'browserify']);
