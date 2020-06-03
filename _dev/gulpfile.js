global.env = 'release';

const gulp = require('gulp');
const requireDir = require('require-dir');
const config = require('./gulp/config.js');

requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('default', () => {
  const tasks = config.enabled;// 上で定義したconfigファイルの中のenableタスクを読んでるよ
  console.log(tasks);// タスクがなくなるまで実行するよ
  for (const task of tasks) {
    gulp.start(task);
  }
  // // gulp.start('pug');
  // gulp.start('ejs');
  // gulp.start('scss');
  // // gulp.start('stylus');
  // gulp.start('concat-js-libs');
  // gulp.start('server');
  // gulp.start('watch');
});
