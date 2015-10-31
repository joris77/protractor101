var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: {
        app: ['./app/main.js']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
