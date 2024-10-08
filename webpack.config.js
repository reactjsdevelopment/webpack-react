import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        // contentBase: path.join(__dirname, 'src')
        static: './'
    },
    module: {
        rules: [
            { // this is so that we can compile any React,        // ES6 and above into normal ES5 syntax        
                test: /\.(js|jsx)$/, // we do not want anything from node_modules to be compiled        
                exclude: /node_modules/,
                // use: ['babel-loader']
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            }, 
            {

                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader']
            },{

                test: /\.(css|scss)$/,
                use: ["style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            // {
            //     test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            //     loaders: ['file-loader']
            // }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    })]
};
