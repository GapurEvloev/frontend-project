import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const tsLoader: webpack.RuleSetRule = { // Rule for ts-loader
    test: /\.tsx?$/, // Apply this rule to files ending in .ts or .tsx
    use: "ts-loader", // Use the ts-loader package
    exclude: /node_modules/, // Don't apply to files residing in node_modules
  };

  return [ // List of rules for modules (configure loaders, parser options, etc.). These rules only apply for modules bundling with webpack and only for this config file.
    tsLoader,
  ];
}