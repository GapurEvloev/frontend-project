import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [ // List of plugins
    new HtmlWebpackPlugin({ // Generates an HTML file from a template
      template: paths.htmlTemplate, // Template file
    }),
    new webpack.ProgressPlugin(), // Make this instance emit webpack building progress to console.
    new MiniCssExtractPlugin({ // Extracts CSS into separate files
      filename: 'css/[name].[contenthash:8].css', // Output filename
      chunkFilename: 'css/[name].[contenthash:8].chunk.css', // Output filename for chunks
    }),
    // Allows you to create global constants which can be configured at compile time
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev), // isDev constant
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false, // Disable open analyzer
    }), // Bundle analyzer plugin
  ];

  if (isDev) {
    plugins.push(new ReactRefreshPlugin({
      overlay: false, // Disable overlay
    })); // React refresh plugin
    plugins.push(new webpack.HotModuleReplacementPlugin()); // Hot module replacement plugin (HMR)
  }

  return plugins;
}
