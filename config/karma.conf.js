'use strict';

const webpackConfig = require('./webpack.test');

module.exports = (config) => {
    config.set({
        autoWatch: true,
        basePath: '',
        browsers: ['PhantomJS'],
        colors: true,
        frameworks: ['jasmine'],
        files: [
            {pattern: './config/karma.entry.js', watched: false}
        ],
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {
            './config/karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: false,
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpackServer: {
            noInfo: true
        },

    });
};
