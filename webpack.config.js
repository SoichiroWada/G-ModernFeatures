// const path = require('path');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist/assets'),
//         filename: 'bundle.js'
//     },
//     mode: 'development',
//     devServer: {
//         contentBase:path.resolve(__dirname, 'dist'),
//         publicPath: '/assets/'
//     }
// };

const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },

    mode: 'development',

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        devMiddleware: {
            publicPath: '/assets/'
        },
        port: 8080,
        open: true
    }
};