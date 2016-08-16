/*
 * Gruntfile for IAA Landingpage
 */

module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Config
  var config = {
    sassPath: 'assets/sass',
    jsPath: 'assets/js',
    nodePath: 'node_modules',
    minPath: 'assets/min'
  };

  grunt.initConfig({
    // Clean assets directories
    clean: {
      options: {force: true},
      assets: [
        config.minPath + '/*'
      ]
    },

    // ==================================================
    // Copy tasks
    copy: {
      js: {
        expand: true,
        flatten: true,
        cwd: config.nodePath + '/',
        src: [
          'jquery/dist/jquery.min.js'
        ],
        dest: config.minPath + '/'
      }
    },

    // ==================================================
    // Watch tasks
    watch: {
      sassDefault: {
        files: [
          config.sassPath + '/**/*.scss'
        ],
        tasks: ['sass:dev']
      },
      js: {
        files: [
          config.jsPath + '/game.js'
        ],
        tasks: ['uglify:dev'],
        options: {
          livereload: true
        }
      }
    },

    // ==================================================
    // Sass Tasks
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true
        },
        files: [{
          expand: true,
          cwd: config.sassPath,
          dest: config.minPath,
          src: ['**/*.scss'],
          ext: '.css'
        }]
      }
    },

    // ==================================================
    // JavaScript Tasks
    uglify: {
      dev: {
        options: {
          preserveComments: 'some'
        },
        files: {
          'assets/min/game.js': [
            config.jsPath + '/game.js'
          ]
        }
      }
    }
  })
  ;

  grunt.registerTask('dev', [
    'clean',
    'sass:dev',
    'uglify:dev',
    'copy:js',
    'watch'
  ]);

  grunt.registerTask('default', ['dev']);
};
