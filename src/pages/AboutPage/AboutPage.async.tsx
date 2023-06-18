import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Don't forget to remove setTimeout in production, it's only for demo
    setTimeout(() => resolve(import("./AboutPage")), 1000)
  }
));