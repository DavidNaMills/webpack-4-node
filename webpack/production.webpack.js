const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require("webpack");
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
  return {
    mode: "production",
    entry: "./src/index.ts",
    output: {
      filename: `${process.env.ENV}-server.js`,
      path: path.resolve("dist"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /[\\/]node_modules[\\/]/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.EnvironmentPlugin({
        ENV: process.env.ENV,
      }),
    ],
  };
};
