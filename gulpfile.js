let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass')); //Подключаем Sass пакет

    
gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('style.sass') // источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('./css'));//куда попадает css
    });