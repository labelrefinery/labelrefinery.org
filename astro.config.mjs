import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://labelrefinery.org",
  // Astro 7 defaults this to "jsx", which applies JSX whitespace semantics:
  // whitespace containing a newline next to a tag is dropped entirely. Prose
  // wraps before inline links constantly, so "Then follow\n<a>what to turn
  // on</a>" shipped as "Then followwhat to turn on". `true` keeps the
  // minification under normal HTML whitespace rules -- 1.5 KB across the whole
  // site, against a class of bug that returns with every reflowed paragraph.
  compressHTML: true,
});
