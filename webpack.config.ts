import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // Entry file
    build: path.resolve(__dirname, 'build'), // Output directory
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'), // Template file
    src: path.resolve(__dirname, 'src'), // Source directory
  };
  const mode = env.mode || 'development'; // Set the mode to development or production (default is development)
  const PORT = env.port || 3000; // The port the dev server will run on (default is 3000)
  const isDev = mode === 'development'; // Is the mode development? (true or false)

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  }); // Return the config object
};
