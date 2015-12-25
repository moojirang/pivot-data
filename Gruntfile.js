module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/pivot.js']
        },
        uglify: {
            options: {
                preserveComments: 'some'
            },
            build: {
                files: {
                    'pivot.min.js': ['src/pivot.js']
                }
            }
        }

    });

    grunt.loadTasks('./tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', function () {
        grunt.task.run('jshint');
        grunt.task.run('uglify');

        if (grunt.option('complete'))
            grunt.task.run('compile-data');
    });
};
