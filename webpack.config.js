const path = require("path");
const dotenv = require("dotenv");
const { DefinePlugin } = require("webpack");

const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

const clientConfig = {
  context: ROOT,

  mode: process.env.BUILD_MODE || "development",
  entry: {
    index: "./app/index.tsx",
  },

  output: {
    filename: "[name].bundle.js",
    path: DESTINATION,
  },

  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    modules: [ROOT, "node_modules"],
    fallback: { path: false, fs: false },
  },

  module: {
    rules: [
      /****************
       * PRE-LOADERS
       *****************/
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader",
      },

      /****************
       * LOADERS
       *****************/
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devtool: "cheap-module-source-map",
  devServer: {},
  // resolve.fallback: { "path": false },
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
};

module.exports = [clientConfig];
