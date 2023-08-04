import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    htmlTemplate: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    entities: path.resolve(paths.src, 'entities'),
  };

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test.toString())) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }

    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoaders(true));

  return config;
};
