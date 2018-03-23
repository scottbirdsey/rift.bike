module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: '<%= banner %>'
            },
            css_main: {
                src: [
                    'css/lib/normalize.css',
                    'css/lib/responsive-carousel.css',
                    'css/lib/responsive-carousel.slide.css',
                    'css/core.css'
                ],
                dest: 'dist/css/main.css'
            },
            css_patterns: {
                src: [
                    'css/lib/normalize.css',
                    'css/lib/responsive-carousel.css',
                    'css/lib/responsive-carousel.slide.css',
                    'css/core.css',
                    'css/lib/xrayhtml.css',
                    'css/patterns.css'
                ],
                dest: 'dist/css/patterns.css'
            },
            js_initial: {
                src: [
                    '<%= grunticon.svg.files[0].dest %>grunticon.loader.js',
                    'js/lib/fontfaceobserver.js',
                    'js/config.js',
                    'js/lang.js',
                    'js/utils.js',
                    'js/initial.js'
                ],
                dest: 'dist/js/initial.js'
            },
            js_main: {
                src: [
                    'js/lib/shoestring.js',
                    'js/jquerv.js',
                    'js/lib/imagesloaded.js',
                    'js/carousels.js',
                    'js/lib/ajaxInclude.js',
                    'js/lib/appendAround.js',
                    'js/lib/responsive-carousel.js',
                    'js/lib/responsive-carousel.touch.js',
                    'js/lib/responsive-carousel.drag.js',
                    'js/lib/responsive-carousel.ajax.js',
                    'js/lib/responsive-carousel.autoinit.js',
                    'js/photomap.js',
                    'js/links-more.js',
                    // This eyp-init.js file needs to stay last!
                    'js/eyp-init.js'
                ],
                dest: 'dist/js/main.js'
            },
            js_patterns: {
                src: [
                    'js/lib/shoestring.js',
                    'js/jquerv.js',
                    // Initialize xrayhtml immediately after shoestring/$
                    'js/lib/xrayhtml.js',
                    'js/carousels.js',
                    'js/lib/ajaxInclude.js',
                    'js/lib/appendAround.js',
                    'js/lib/responsive-carousel.js',
                    'js/lib/responsive-carousel.touch.js',
                    'js/lib/responsive-carousel.drag.js',
                    'js/lib/responsive-carousel.ajax.js',
                    'js/lib/responsive-carousel.autoinit.js',
                    'js/photomap.js',
                    'js/links-more.js',
                    'js/pattern-nav.js',
                    // This eyp-init.js file needs to stay last!
                    'js/eyp-init.js'
                ],
                dest: 'dist/js/patterns.js'
            }
        },
        copy: {
            svg: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= grunticon.svg.files[ 0 ].cwd %>',
                        src: [
                            '*.svg'
                        ],
                        dest: '<%= grunticon.svg.files[ 0 ].dest %>'
                    },
                ],
            },
            css_type: {
                src: 'css/type.css',
                dest: 'dist/css/type.css'
            }
        },
        cssmin: {
            css_main: {
                src: [
                    '<%= concat.css_main.dest %>'
                ],
                dest: '<%= concat.css_main.dest %>'
            },
            css_type: {
                src: [
                    '<%= copy.css_type.dest %>'
                ],
                dest: '<%= copy.css_type.dest %>'
            },
            css_patterns: {
                src: [
                    '<%= concat.css_patterns.dest %>'
                ],
                dest: '<%= concat.css_patterns.dest %>'
            },
            xrayhtml: {
                src: [
                    'css/lib/xrayhtml.css'
                ],
                dest: 'dist/css/lib/xrayhtml.css'
            }
        },
        grunticon: {
            svg: {
                files: [{
                    expand:     true,
                    cwd:        "svg/",
                    src:        [ "*.svg", "*.png" ],
                    dest:       "dist/svg/"
                }],
                options: {
                    customselectors: {
                        "angle-white": [ ".pg-nav-inner:after" ],
                        "arrow-carousel-left": [ ".carousel .prev" ],
                        "arrow-carousel-right": [ ".carousel .next" ],
                        "plus": [ ".photomap-info a" ],
                        "pull-slash": [ ".pull-content:after" ],
                        "quote": [ ".pull-content:before" ],
                        "top": [ ".pg-top a" ],
                        "logo-health": [ ".is-sbs .site-logo"]
                    },
                    cssprefix: ".",
                    compressPNG: true,
                    enhanceSVG:  true
                }
            }
        },
        svgmin: {
            // Configuration that will be passed directly to SVGO
            options: {
                plugins: [
                    { removeXMLProcInst:false },  // prevent the XML header from being stripped
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            svgs: {
                files: [{
                    expand: true,
                    cwd: "dist/svg/",
                    src: [ "**/*.svg" ],
                    dest: "dist/svg/",
                    ext: ".svg"
                }]
            }
        },
        uglify: {
            js_initial: {
                src: [
                    '<%= concat.js_initial.dest %>'
                ],
                dest: '<%= concat.js_initial.dest %>'
            },
            js_main: {
                src: [
                    '<%= concat.js_main.dest %>'
                ],
                dest: '<%= concat.js_main.dest %>'
            },
            js_patterns: {
                src: [
                    '<%= concat.js_patterns.dest %>'
                ],
                dest: '<%= concat.js_patterns.dest %>'
            },
            picturefill: {
                src: [
                    'js/lib/picturefill.js'
                ],
                dest: 'dist/js/lib/picturefill.js'
            },
            xrayhtml: {
                src: [
                    'js/lib/xrayhtml.js'
                ],
                dest: 'dist/js/lib/xrayhtml.js'
            }
        },
        watch: {
            all: {
                files: [
                    'Gruntfile.js'
                    ],
                tasks: 'local'
            },
            cssjs: {
                files: [
                    'css/**/*.css',
                    'js/**/*.js'
                ],
                tasks: 'cssjs'
            },
            svg: {
                files: [
                    'svg/**/*'
                ],
                tasks: 'svg'
            }
        }
    });

    grunt.registerTask( "default", [
        "grunticon",
        "svgmin",
        "concat",
        "copy",
        "cssmin",
        "uglify"
    ] );

    grunt.registerTask( "cssjs", [
        "concat",
        "copy",
        "cssmin"
    ] );

    grunt.registerTask( "svg", [
        "grunticon",
        "svgmin"
    ] );

    grunt.registerTask( "local", [
        "grunticon",
        "svgmin",
        "concat",
        "copy",
        "cssmin"
    ] );
};
