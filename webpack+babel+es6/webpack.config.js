const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry:"./src/app",
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:"app.bundle.js"
    },
    module:{
        rules:[{
            test: /\.js$/,    
            exclude: /node_modules/,    
            use: 'babel-loader'    
        }],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
        })
    ]
}