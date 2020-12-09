/* eslint-disable */

const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    clientLogLevel: "silent",
    port: 3333,
    historyApiFallback: true,
    open: true,
    compress: true,
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({})],
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ESLintPlugin(),
  ],
};
