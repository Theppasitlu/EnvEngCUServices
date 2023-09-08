const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  // mode: 'development',
  mode: 'production',
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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ],
        type: 'asset/resource',
      },
      { 
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
        type: 'asset/resource',
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
      template: "./public/index.html",
      filename: "index.html",
    }), 
    new HtmlWebpackPlugin({
      template: "./public/ReDirect.html",
      filename: "ReDirect.html",
      chuncks: ["ReDirect"],
    })],
}
