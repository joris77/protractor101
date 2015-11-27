var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry: {
        app: ['./app/bootstrap.js'],
        vendors: ['angular','angular-resource','bootstrap', 'bootstrap-webpack']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    module: {
        loaders: [
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};
