"use strict";

var gulp = require('gulp'),
  //concat = require('gulp-concat'),  // lägger ihop filer till ett
  uglify = require('gulp-uglify'),  // tar bort whitespace
  rename = require('gulp-rename'),  //
    sass = require('gulp-sass'),  //  sass compiler
    maps = require('gulp-sourcemaps'), // map orientering för leta upp cod i dev-tool
    del = require('del'),
    bsync = require("browser-sync"),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    filesize= require('gulp-filesize'),
    $ = require('gulp-load-plugins')();


    gulp.task("sass",function(){
      return gulp.src("public/scss/index.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('public/css'))
      .pipe(bsync.reload({stream:true}));

    });

    gulp.task('browserify', function(){
       return browserify({entries:'./public/controllers/controller.js',debug:true})// säger åt browserify vilket fil den ska starta i,kör debug istället för source-maps i
       .bundle()//slår samman allt i en fin x.js
       .pipe(source('main.js'))// x.js = main.js
       .pipe(filesize())
       .pipe(gulp.dest('./public/controllers/'))// sparar main.js i valda mappen
       .pipe(bsync.reload({
          stream: true
       }));//reloadar webbläsare
    });

    gulp.task('dev', ['sass','browserify','watchFiles'],function() { //kollar efter förändringar i dessa filer och kör de tasks som är kopplade till watch funktionenrna. kör browserifyoch sass tasks när gulp watch startar.startar alla tasks för development med gulp.dev
      gulp.watch('scss/*.scss', ['sass']);
      gulp.watch('public/controllers/**/*.js', ['browserify']);
      gulp.watch('public/index.html').on('change',bsync.reload);
    });


    gulp.task('watchFiles',function(){   // sparar,refreshar,skapar map,kör tasks
      bsync({
      //  server:{
        //  baseDir: "./public"
      //}
      proxy:'localhost:3000'
      })
    })

      gulp.task("uglify", function() { //tar bort whitespace,preformance related(not necisary for development)
        return gulp.src("public/controllers/main.js")
          .pipe(uglify())
          .pipe(rename('main.min.js'))
          .pipe(filesize())      // uglify versionen
          .pipe(gulp.dest('public/controllers'));
      });

      gulp.task('sassp', function() { //sass för produktion
        return gulp.src('scss/index.scss')
          .pipe(maps.init()) // startar source maps
          .pipe(sass({outputStyle:'compressed'}))// minifierar css koden för dist mappen och körs i gulp.task production
          .pipe(maps.write('./'))  // skriver maps filen i folder den beffiner sig i
          .pipe(gulp.dest('public/css'))
          .pipe(bsync.reload({stream:true}))// refreshar webbläsare

      });



      gulp.task("production", ['uglify', 'sassp'],function(){ //lägger ihop fler tasks
        return gulp.src(['public/controllers/main.min.js','public/index.html','public/css/index.css'],{base:'./public'})
         .pipe(gulp.dest('dist'));  //compila ihop hella appen i en färdig mapp 'dist'
      });

      gulp.task('clean',function(){ // delita all filer som var compilade by gulp
        del(['dist','public/css/style.css*','public/scripts/main*.js*']);
      });
