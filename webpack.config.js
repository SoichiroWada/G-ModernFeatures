const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        devMiddleware: {
            publicPath: '/assets/'
        },
        host:'0.0.0.0',
        port: 8080,
        open: true
    }
};