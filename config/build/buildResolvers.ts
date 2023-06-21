import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js", ".css"], // Resolve these extensions
    preferAbsolute: true, // Prefer absolute paths
    modules: [
      options.paths.src, // Resolve modules from src
      "node_modules", // Resolve modules from node_modules
    ],
    alias: {}, // Resolve these aliases
    mainFiles: ["index"], // Resolve these files by default
  }
}
