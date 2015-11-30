var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var config = require('./webpack.conf');
var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("build-dev", function() {
    gulp.watch(["app/*"], ["webpack"]);
});


gulp.task("webpack-dev-server", function(callback) {
    config.devtool = "eval";
    config.debug = true;
    config.entry.app = ['./app/bootstrapDev.js'];
    config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(config), {
        stats: {
            colors: true
        },
        hot:true,
        historyApiFallback: true,
        publicPath: config.output.publicPath
    }).listen(8080, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
        });



});