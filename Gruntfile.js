/*!
GPII Mac OS X Personalization Framework Gruntfile

Copyright 2015-2016 Raising the Floor

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/mac/blob/master/LICENSE.txt
*/

"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-gpii");

    grunt.config.getRaw("gpiiGruntGlobal");
    grunt.initConfig({
        jshint: {
            src: ["gpii/**/*.js", "tests/**/*.js", "index.js", "gpii.js"],
            buildScripts: ["Gruntfile.js"],
            options: {
                jshintrc: true
            }
        },
        jsonlint: {
            src: ["gpii/**/*.json", "tests/**/*.json"]
        }
    });

    grunt.registerTask("build", "Build the entire GPII", function () {
        grunt.task.run("gpii-universal");
    });
};
