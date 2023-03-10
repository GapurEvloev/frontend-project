export function BuildSvgLoaders() {
  return {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
}
