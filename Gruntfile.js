'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mkdir: {
            css: {
                options: {
                    create: ['src/assets/css']
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'src/assets/css/style.css': 'src/assets/sass/style.scss'
                }
            }
        },

        watch: {
            css: {
                files: 'src/assets/sass/**/*.scss',
                tasks: ['sass']
            },

            config: {
                options: {
                    reload: true
                },

                files: 'Gruntfile.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['mkdir', 'sass', 'watch']);
};
