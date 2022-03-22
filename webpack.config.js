const path = require('path');
require('dotenv').config()
console.log(process.env)
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
module.exports = {
   entry: './src/index.js',
   //entry: ['@babel/polyfill', './src/index.js'],
   output: {
      path: path.resolve(__dirname, '/bundle/'),
      publicPath: '/',
      filename: '[name].js',
   },
   resolve : {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
   devServer: {
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
         },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        encoding: 'base64'
                    }
                }
            }


      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         hash: true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
         template: './public/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/manifest.json", to: "manifest.json" }
        ],
      }),
  
   ]

}

*/

//var path = require('path');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.NODE_ENV)
console.log(__dirname)

module.exports = {
   mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: "/"

  
  
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
         test: /\.css$/i,
         use: ["style-loader", "css-loader"],
      },
      {
         test: /\.svg$/,
         use: {
             loader: 'svg-url-loader',
             options: {
                 encoding: 'base64'
             }
         }
     }
            
            

      
    ]
  },
  devServer: {
    historyApiFallback: true,
    headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },
  plugins: [
   new HtmlWebpackPlugin({
      hash: true,
      title: 'Development',
     'process.env.NODE_URL': JSON.stringify(process.env.BASE_URL),
      template: './public/index.html'
   }),
   new CopyWebpackPlugin({
     patterns: [
       { from: "public/manifest.json", to: "manifest.json" },
         { from: "public/favicon.ico", to: "favicon.ico" }
     ],
   }),
  ]
};

