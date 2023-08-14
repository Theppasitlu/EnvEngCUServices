// const path = require("path");

// module.exports = {
//     mode: "development",
//     devtool: "eval-source-map",
//     entry: "./public/JS/LearnWebPack.js",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "bundle.js"
//     }
// };

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require("path");

// module.exports = {
//     mode: 'development',
//     devtool: 'eval-source-map',
//     entry: {
//       LearnLogin : "./public/JS/LearnWebPack.js",
//       ui : "./public/JS/ui.js",
//     },
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "[name].bundle.js"
//         },
//         watch: true,
//         module: {
//             rules: [
//               {
//                 test: /\.css$/,
//                 use: [
//                   'style-loader',
//                   'css-loader'
//                 ]
//               },
//               {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/i,
//                 type: './public/FONT',
//               },
//               {
//                 test: /\.(png|jpg|jpeg|gif|svg)$/i,
//                 type: './public/PICTURE',
//               },
//             ]
//           },
//             plugins: [
//                 new HtmlWebpackPlugin({
//                     template: './public/PreTempateAuth.html'
//                 })],
// }

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: "./public/JS/AuthTest.js",
    // {
    //   LearnLogin : "./public/JS/LearnWebPack.js",
    //   ui : "./public/JS/ui.js",
    // },
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "[name].bundle.js"
        filename: "bundle.js"
        },
        watch: true,
        module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                // type: './public/FONT',
              },
              {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                // type: './public/PICTURE',
              },
            ]
          },
            plugins: [
              new HtmlWebpackPlugin({
                  template: './public/AuthTest.html'
              })],
}