const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
                resolve: { extensions: [".js", ".jsx"] }
             },
             {
               test: /.css$/,
               use: [
                 {
                    loader: 'style-loader'
                 },
                 {
                    loader: 'css-loader'
                 }
               ]
             },
             {
                test: /\.(ttf|eot|svg|gif|jpg|png|woff|woff2)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif|woff|woff2)$/, use: ['url-loader?limit=100000']
            }
        ]
    },  plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
      ]
}

module.exports = config
