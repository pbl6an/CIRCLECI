const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    handler: path.resolve(__dirname, "src/handler.ts"),
  },
  node: {
    __filename: false,
    __dirname: false,
  },
  target: "node",
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "dist"),
    filename: "handler.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader", options: { transpileOnly: true } },
      { test: /\.pem$/, loader: "raw-loader" },
      { test: /\.graphql$/, loader: "raw-loader" },
    ],
  },
  plugins: [
    new Dotenv({
      path: "../../.env",
    }),
  ],
}
