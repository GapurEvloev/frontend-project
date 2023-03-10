import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { BuildSvgLoaders } from "../build/loaders/buildSvgLoaders";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", "tsx");

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.sbg$/i };
    }

    return rule;
  });

  config.module.rules.push(BuildSvgLoaders());
  config.module.rules.push(buildCssLoaders(true));

  return config;
};
