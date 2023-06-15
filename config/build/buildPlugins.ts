import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [ // List of plugins
    new HtmlWebpackPlugin({ // Generates an HTML file from a template
      template: paths.htmlTemplate, // Template file
    }),
    new webpack.ProgressPlugin(), // Make this instance emit webpack building progress to console.
  ];
}