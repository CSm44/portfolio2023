const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Cierra Home',
            filename: 'home.html',
            template: 'src/hometemplate.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Cierra Contact',
            filename: 'contact.html',
            template: 'src/contacttemplate.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Cierra Portfolio',
            filename: 'portfolio.html',
            template: 'src/portfoliotemplate.html',
        }),
    ]
}

