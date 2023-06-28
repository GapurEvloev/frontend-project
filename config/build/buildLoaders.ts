import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader: webpack.RuleSetRule = { // Rule for babel-loader
    test: /\.(js|jsx|ts|tsx)$/, // Apply this rule to files ending in .js
    exclude: /node_modules/, // Don't apply to files residing in node_modules
    use: { // Use the following loader and options
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'], // Transform modern JS to older versions (for compatibility)
        plugins: [[
          'i18next-extract', // Extracts i18n keys from source code
          {
            locales: ['en', 'ru'], // List of locales to extract
            keyAsDefaultValue: true, // Use the default value as the key
            discardOldKeys: true, // Remove unused keys
            outputPath: 'public/locales/{{locale}}/{{ns}}.json', // Output path for the json files
            // saveMissing: true, // Save missing keys to the json files
          },
        ]],
      },
    },
  };

  // we would use babel if we were using javascript,
  // but we are using typescript, so we don't need it
  const tsLoader: webpack.RuleSetRule = { // Rule for ts-loader
    test: /\.tsx?$/, // Apply this rule to files ending in .ts or .tsx
    use: 'ts-loader', // Use the ts-loader package
    exclude: /node_modules/, // Don't apply to files residing in node_modules
  };

  // SVG-loader
  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  // File-loader
  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  // Rule for sass-loader (compile sass to css)
  const sassLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Extracts CSS into separate files
      {
        loader: 'css-loader', // Translates CSS into CommonJS
        options: {
          modules: { // Enable CSS modules
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')), // Enable CSS modules for files ending in .module.
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]', // Configure the generated ident
          },
        },
      }, // Translates CSS into CommonJS
      'sass-loader', // Compiles Sass to CSS
    ],
  };

  // List of rules for modules (configure loaders, parser options, etc.).
  // These rules only apply for modules bundling with webpack and only for this config file.
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    sassLoader,
  ];
}
