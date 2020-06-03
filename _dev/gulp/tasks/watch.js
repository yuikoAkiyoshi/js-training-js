/**
 * watch
 * 対象ファイルを監視し変更があった場合に実行するタスク
 */

const gulp = require('gulp');

gulp.task('watch', (callback) => {
  const config = require('../config.js');
  const watch = require('gulp-watch');

  /* この下から必要なタスクを有効にする */
  // gulp.watch(config.path.watch.pug, ["pug"]);
  gulp.watch(config.path.watch.ejs, ["ejs"]);
  gulp.watch(config.path.watch.scss, ["scss"]);
  // gulp.watch(config.path.watch.stylus, ["stylus"]);
  gulp.watch(config.path.watch.js_libs, ["concat-js-libs"]);
  // gulp.watch(config.path.watch.img, ["imgmin"]);
});
