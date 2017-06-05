var webpack = require('webpack');

var PROD = true;// JSON.parse(process.env.PROD_ENV || '0');

module.exports ={
    entry: "./app/components/Main.js",
    output: {
        filename: "public/bundle.js"
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
        })
    ] : [],
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}