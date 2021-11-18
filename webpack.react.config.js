const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let distRendererPath = path.join(__dirname, './dist/renderer');
console.log(distRendererPath)
let devServer = {
    static: {
        directory: distRendererPath,
    },
    client: {
        logging: 'info',
        progress: true,
    },
    compress: true,
    port: 4000,
};


module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['main', 'module', 'browser'],
    },
    entry: './src/app.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devServer: devServer,
    output: {
        path: distRendererPath,
        filename: '[name].js',
        publicPath: './',
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};