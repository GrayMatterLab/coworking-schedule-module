var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },

      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader' ]
      // },
      {
        test: /\.css$/,
        use: [
           { loader: 'style-loader' },
          {
            loader: 'css-loader',
            // options: {
            //   modules: true
            // }
          },
        ]
      },
      //   {
      //     test: /node_modules\/.*\.css$/,
      //     use: [
      //       {
      //           loader: 'css-loader',
      //           options: {
      //               modules: true
      //           },
      //       },
      //       {
      //           loader: 'style-loader',
      //       },
      //     ],
      // }
      // {
      //     test: /\.scss$/,
      //     use: [
      //         {
      //             loader: 'style-loader' // creates style nodes from JS strings
      //         },
      //         {
      //             loader: 'css-loader', // translates CSS into CommonJS,
      //         },
      //         {
      //             loader: 'sass-loader', // compiles Sass to CSS
      //             options: {
      //                 includePaths: [
      //                     path.resolve('../node_modules'),
      //                 ]
      //             }
      //         }
      //     ]
      // },
      // {
      //     test: /\.m?js$/,
      //     exclude: /(node_modules|bower_components)/,
      //     use: {
      //         loader: 'babel-loader',
      //         options: {
      //             presets: ['@babel/preset-react', '@babel/preset-env']
      //         }
      //     }
      // },
      // {
      //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //     use: [{
      //         loader: 'file-loader',
      //         options: {
      //             name: '[name].[ext]',
      //             outputPath: 'styles/fonts/'
      //         }
      //     }]
      // }
    ]
  }
}