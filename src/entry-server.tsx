import type { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";
import { headTags } from "./seo/head";
import { llmsTxt } from "./seo/llms";
import { NOT_FOUND, PAGES } from "./seo/site";

// Build-time only (scripts/prerender.mjs): render a route to HTML.
export function render(url: string): string {
  const Router = ({ children }: { children: ReactNode }) => <StaticRouter location={url}>{children}</StaticRouter>;
  return renderToString(<AppShell Router={Router} />);
}

export { headTags, llmsTxt, NOT_FOUND, PAGES };
