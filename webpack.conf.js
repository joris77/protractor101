var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: {
        app: ['./app/main.js'],
        vendors: ['angular','angular-resource']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
