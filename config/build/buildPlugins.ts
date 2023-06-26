import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [ // List of plugins
    new HtmlWebpackPlugin({ // Generates an HTML file from a template
      template: paths.htmlTemplate, // Template file
    }),
    new webpack.ProgressPlugin(), // Make this instance emit webpack building progress to console.
    new MiniCssExtractPlugin({ // Extracts CSS into separate files
      filename: "css/[name].[contenthash:8].css", // Output filename
      chunkFilename: "css/[name].[contenthash:8].chunk.css", // Output filename for chunks
    }),
    new webpack.DefinePlugin({ // Allows you to create global constants which can be configured at compile time
      __IS_DEV__: JSON.stringify(isDev), // isDev constant
    })
  ];
}