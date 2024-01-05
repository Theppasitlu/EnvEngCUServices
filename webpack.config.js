const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  // mode: 'development',
  mode: 'production',
  devtool: 'eval-source-map',
  entry: {
    PopUp : "./public/JS/PopUp.js",
    PopUpTest : "./public/JS/PopUpTest.js",
    ReDirect : "./public/JS/ReDirect.js",
    RegisterProfile : "./public/JS/RegisterProfile.js",
    AdminTest : "./public/JS/AdminTest.js",
    DashBoard : "./public/JS/DashBoard.js",
    SideBars : "./public/JS/SideBars.js",
    BookRoom : "./public/JS/BookRoom.js",
    ChangeRoom : "./public/JS/ChangeRoom.js",
    Home : "./public/JS/Home.js",
    LabEquip : "./public/JS/LabEquip.js",
    UserProfile : "./public/JS/UserProfile.js",
    QAndA : "./public/JS/QAndA.js",
    Request : "./public/JS/Request.js",
    Return : "./public/JS/Return.js",
    Services : "./public/JS/Services.js",
    Status  : "./public/JS/Status.js",
    ui : "./public/JS/ui.js",
    BasicFunction : "./public/JS/BasicFunction.js",
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
        loader: "file-loader",
        type: 'asset/resource',
        options: {
          name: '[name].[ext]',
          outputPath: 'pictures/'
        }
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
      template: "./public/index.html",
      filename: "index.html",
      chuncks: ["PopUp"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Register.html",
      filename: "Register.html",
      chuncks: ["RegisterProfile"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Learn.html",
      filename: "Learn.html",
      chuncks: ["PopUp"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/PopUpTest.html",
      filename: "PopUpTest.html",
      chuncks: ["PopUpTest"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/BookRoom.html",
      filename: "BookRoom.html",
      chuncks: ["BookRoom"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/ChangeRoom.html",
      filename: "ChangeRoom.html",
      chuncks: ["ChangeRoom"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Home.html",
      filename: "Home.html",
      chuncks: ["Home"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/LabEquip.html",
      filename: "LabEquip.html",
      chuncks: ["LabEquip"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Profile.html",
      filename: "Profile.html",
      chuncks: ["UserProfile"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/QAndA.html",
      filename: "QAndA.html",
      chuncks: ["QAndA"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Request.html",
      filename: "Request.html",
      chuncks: ["Request"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Return.html",
      filename: "Return.html",
      chuncks: ["Return"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Services.html",
      filename: "Services.html",
      chuncks: ["Services"],
    }), 
    new HtmlWebpackPlugin({
      template: "./public/Status.html",
      filename: "Status.html",
      chuncks: ["Status"],
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