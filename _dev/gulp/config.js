/**
 * config.js
 * gulpの設定ファイル
 */
module.exports = {

  name: 'sample-coding-rules',

  // local serverの設定
  server: {
    port: 4008,
    startPath: './'
  },

  browsers: [
    'ie >= 11',
    'ios >= 11',
    'android >= 6'
  ],
  // これがglupfileで読んでるenabledじゃ！
  enabled: [
    // 'pug',
    'ejs',
    'scss',
    'imgmin',
    // 'stylus',
    'concat-js-libs',
    'server',
    'watch'
  ],

  // notify通知用のアイコン指定
  // notifyIcon: './gulp/notify.png',

  // gulp内で利用する各種ファイルへのパス
  path: {

    cacheLocation: '.css-cache',

    watch: {
      pug: [
        './pug/**/*.pug'
      ],
      ejs: [
        './ejs/**/*.ejs'
      ],
      scss: [
        './scss/**/*.scss'
      ],
      stylus: [
        './stylus/**/*.styl'
      ],
      js: [
        './js/**/*.js'
      ],
      js_libs: ['./js/lib/**/*.js'],
      img: ['./images/**/*.{jpg,jpeg,png,gif}']
    },

    // そのまま配信したいhtml, js, css を指定
    copy: {
      js: [
        // './src/**/copy.js'
      ],
      img: [
        './images/**/*.{svg}',
        '!./images/**/_*.{svg}'
      ]
    },

    src: {
      root: './',
      pug: ['./pug/**/*.pug', '!./pug/**/_*.pug'],
      ejs: ['./ejs/**/*.ejs', '!./ejs/**/_*.ejs'],
      // html:     ['./pug/**/*.{html,template}', '!./pug/**/_*.html'],
      scss: ['./scss/**/*.scss', '!./scss/**/_*.scss'],
      stylus: ['./stylus/**/*.styl', '!./stylus/**/_*.styl'],
      js: [
        './js/**/*.js',
        '!./js/lib/**/*.js',
        '!./js/**/_*.js'
      ],
      js_entry: './js/app.js',
      js_libs: [
        './js/lib/jquery-3.3.1.min.js',
        './js/lib/jquery.easing.1.3.js',
        './js/lib/*'
      ],
      img: [
        './images/**/*.{jpg,jpeg,png,gif}',
        '!./images/**/_*.{jpg,jpeg,png,gif}'// このファイルを読み込んで圧縮するよ！（パスはgulpファイルから見たもの)
      ]
    },

    lint: {
      scss: {
        src: ['./scss/**/*.scss', '!./scss/reset/*.scss', '!./scss/plugins/*.scss'],
        dest: './scss/',
        tmp: './tmp/scss/'
      }
      // stylus: {
      //   src:  './stylus/**/*.styl',
      //   dest: './stylus/',
      //   tmp:  './tmp/stylus/'
      // }
    },

    // dev: {
    //   root:    '../test/',
    //   html:    '../test/',
    //   js:      '../test/assets/js/',
    //   js_libs: '../test/assets/js/',
    //   css:     '../test/assets/css/',
    //   img:     '../test/assets/images/'
    // },

    release: {
      root: '../dest/',
      html: '../dest/',
      js: '../dest/assets/js/',
      js_libs: '../dest/assets/js/',
      css: '../dest/assets/css/',
      img: '../dest/assets/images/',// ここにタスクが実行された（コンパイルされた）ファイルが吐き出される！
    }
  }

};
