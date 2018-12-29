const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require("./webpack.config.base");

const isProd = process.env.NODE_ENV === "production";

const webpackConfig = merge(baseWebpackConfig, {
    mode: isProd ? 'production' : 'development',
    entry: {
        app: "./src/entry-client.js"
    },
    output: {
        path: path.resolve(__dirname, "../"),
        filename: "static/js/[name].[hash].js",
        publicPath: "/"  // 打包后输出路径以/dist/开头
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        })
    ]
});

if (isProd) {
    webpackConfig.module.rules.push({
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader'
            },
            {
                loader: "sass-loader"
            }
        ]
    });
    webpackConfig.output = {
        path: path.resolve(__dirname, "../dist"),
        filename: "static/js/[name].[hash].js",
        publicPath: "/dist/"  // 打包后输出路径以/dist/开头
    };
    webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash].css',
        })
    );
} else {
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}


module.exports = webpackConfig;
