import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode, // Set the mode to development or production
    entry: { // Entry files
      main: paths.entry, // Entry file
    },
    output: {
      filename: '[name].[contenthash].js', // Output file name
      path: paths.build, // Output directory
      clean: true, // Clean the output directory before emit.
    },
    plugins: buildPlugins(options), // List of plugins
    module: {
      rules: buildLoaders(options), // Loaders
    },
    resolve: buildResolvers(options), // Resolve file extensions
    devtool: isDev ? 'inline-source-map' : undefined, // Emit a source map for easier debugging
    devServer: isDev ? buildDevServer(options) : undefined, // Dev server configuration
  };
}
