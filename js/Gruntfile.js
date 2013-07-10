module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        watch: {
            
            js: {
                files: ['assets/js/*.js', 'tests/*.js'],
                tasks: ['jshint', 'qunit']
            }
        },
        qunit: {
            local: {
                options: {
                    urls: [
                        'http://localhost:8000/tests/tests.html'
                    ]
                }
            }
        },
        jshint: {
            local: [
                'Gruntfile.js',
                '!assets/js/lib/',
                'assets/js/*.js',
                'tests/*.js'
            ]
        },
        connect: {
            uses_defaults: {}
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'connect',
        'jshint:local',
        'qunit:local',
        'watch'
    ]);
};
