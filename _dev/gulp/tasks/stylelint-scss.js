/**
 * stylelintScss
 * scssがスタイル規約に従っているかをチェックしてプロパティを並び替えて元ファイルに上書きするタスク
 *
 * @return {Stream}
 */
const gulp = require('gulp');

gulp.task('stylelintScss', () => {
  const config = require('../config.js');

  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');

  const postcss = require('gulp-postcss');
  const postcssScss = require('postcss-scss');
  const stylelint = require('stylelint');
  const reporter = require('postcss-reporter');

  return gulp.src(config.path.lint.scss.src)
    .pipe(plumber({
      errorHandler:notify.onError({
        title: '😱  Stylelint Error!',
        message: '\nスタイル規約違反の記述があります！\nターミナルで内容を確認してね！\n\nもし、\n\n essage:\n     Subject parameter value width cannot be greater than the container width.\n\nという文言がこの赤いエリアのちょっと下に出ている場合は、\ngulpを一旦停止した後、\n\n stty cols 1000 \n\nというコマンドを実行してみてください。\n\n特に何も見た目の変化はありませんが、\nそのまま再度gulpコマンドを実行すると\nスタイル規約違反箇所が一覧で表示されると思います！\n\n'
      })
    }))
    .pipe(postcss([
      stylelint({ fix: true }),
      reporter({ clearMessages: true, throwError: false })
    ], {syntax: postcssScss}))
    .pipe(gulp.dest(config.path.lint.scss.dest));

});
