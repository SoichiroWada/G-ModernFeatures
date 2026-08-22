const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase:path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    }
};