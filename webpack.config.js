//courtesy of Mr. Eli Davis
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
            {
                test: /scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader', 'sass-loader'], 
            },
            {test: /\.(png|jpg)$/, use: 'url-loader?limit=8192' },
        ],
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,'/src/index.html')}
        )
    ],
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
          publicPath: '/build'
        },
        proxy: {
          '/': 'http://localhost:3000/'
        }
    },
};
