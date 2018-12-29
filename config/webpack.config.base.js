const webpack = require('webpack');
const path = require('path');

var isProd = false;
if (process.env.NODE_ENV === "production") {
    isProd = true;
}


const baseWebpackConfig = {
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    devtool: isProd ? "#source-map" : "#cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=static/images/[name].[ext]'
            }
        ]
    }
};


module.exports = baseWebpackConfig;
