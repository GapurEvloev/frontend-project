import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "development", // Set the mode to development or production
  entry: { // Entry files
    main: path.resolve(__dirname, "src", "index.ts"), // Entry file
  },
  output: {
    filename: "[name].[contenthash].js", // Output file name
    path: path.resolve(__dirname, "build"), // Output directory
    clean: true, // Clean the output directory before emit.
  },
  plugins: [ // List of plugins
    new HtmlWebpackPlugin({ // Generates an HTML file from a template
      template: path.resolve(__dirname, "public", "index.html"), // Template file
    }),
    new webpack.ProgressPlugin(), // Make this instance emit webpack building progress to console.
  ],
  module: {
    rules: [ // List of rules for modules (configure loaders, parser options, etc.). These rules only apply for modules bundling with webpack and only for this config file.
      {
        test: /\.tsx?$/, // Apply this rule to files ending in .ts or .tsx
        use: "ts-loader", // Use the ts-loader package
        exclude: /node_modules/, // Don't apply to files residing in node_modules
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Resolve these extensions
  }
};

export default config;