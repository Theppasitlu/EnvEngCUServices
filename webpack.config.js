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

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    PopUpTest : "./public/JS/PopUpTest.js",
    ReDirect : "./public/JS/ReDirect.js",
    DashBoard : "./public/JS/DashBoard.js",
    ui : "./public/JS/ui.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
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
        type: './public/FONT',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: './public/PICTURE',
      },
    ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/PreTempateAuth.html",
      filename: "TempateAuth.html",
      chuncks: ["ui"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/DashBoard.html",
      filename: "DashBoard.html",
      chuncks: ["DashBoard"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/PopUpTest.html",
      filename: "PopUpTest.html",
      chuncks: ["PopUpTest"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/ReDirect.html",
      filename: "ReDirect.html",
      chuncks: ["ReDirect"],
    })],
}
