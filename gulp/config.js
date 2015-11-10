//var prod = './build/prod';
var dev = './build/dev/';
var src = './src';

module.exports = {
  developer: {
    sequencePre: [
      // need for resolve trouble with empty sequence
      'empty'
    ],
    sequenceClean: [
      'dev-clean'
    ],
    sequenceBuild: [
      'dev-backend',
      'dev-jade',
      'dev-js-custom',
      'dev-fonts',
      'dev-img'
    ],
    sequenceServer: [
      'dev-browsersync'
    ],
    sequenceWatch: [
      'dev-watch-backend',
      'dev-watch-jade',
      'dev-watch-js-custom',
      'dev-watch-img'
    ],
    sequencePost: [
      // need for resolve trouble with empty sequence
      'empty'
    ]
  },
  devClean: {
    dest: dev
  },
  devScss: {
    src: src + '/templates/custom.scss',
    watch: src + '/**/*.scss',
    dest: dev,
    concatFile: 'custom.css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  devCssVendor: {
    src: [
        ],
    dest: dev,
    concatFile: 'vendor.css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  devJsCustom: {
    src: src + '/**/*.{js,coffee}',
    watch: src + '/**/*.{js,coffee}',
    concatFile: 'custom.js',
    dest: dev
  },
  devJsVendor: {
    src: [
      './bower_components/jquery/dist/jquery.js'
    ],
    concatFile: 'vendor.js',
    dest: dev
  },
  devImage: {
    watch: src + '/images/**/*',
    src: src + '/images/*',
    dest: dev + '/i'
  },
  devJade: {
    watch: src + '/**/*.jade',
    src: src + '/bundles/*.jade',
    dest: dev
  },
  devBackend: {
    watch: src + '/**/*.php',
    src: src + '/backend/*.php',
    dest: dev
  },
  devBrowsersync: {
    dest: dev
  }
};
