var webpack = require('webpack');
module.exports = {
    entry: "./index.js",
    output: {
        path: './build',
        filename: "bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ["babel"],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.sass$/,
            loader: "style!css!sass"
        }]
    },
    devServer: {
        contentBase: './build/',
        devtool: "#inline-source-map"
    }
};