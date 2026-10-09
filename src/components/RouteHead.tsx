import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, seoFor } from "@/seo/site";

// Keeps title/description/canonical right while navigating in the browser.
// The full set of tags (and JSON-LD) is baked into each page's HTML at build
// time by scripts/prerender.mjs — that is what crawlers read.
const setMeta = (selector: string, attr: string, value: string) =>
  document.head.querySelector(selector)?.setAttribute(attr, value);

const RouteHead = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = seoFor(pathname);
    const url = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;
    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [pathname]);
  return null;
};

export default RouteHead;
