const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },

    watchOptions: {
        poll: 1000,
        ignored: /node_modules/
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            watch: {
                poll: 1000
            }
        },

        devMiddleware: {
            publicPath: '/assets/'
        },

        host: '0.0.0.0',
        port: 8080,
        open: false,
        liveReload: true
    }
};