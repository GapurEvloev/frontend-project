import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js", ".css"], // Resolve these extensions
  }
}
