import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode: mode, // Set the mode to development or production
    entry: { // Entry files
      main: paths.entry, // Entry file
    },
    output: {
      filename: "[name].[contenthash].js", // Output file name
      path: paths.build, // Output directory
      clean: true, // Clean the output directory before emit.
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}