# labelrefinery.org

The project site. [Astro](https://astro.build), static, deployed to Cloudflare
Workers static assets.

```sh
npm install
npm run dev            # local
npm run build          # -> dist/
npx wrangler deploy    # -> Cloudflare
```

Pages: overview, the data (how to view a scene and its labels in Foxglove), the
pipelines, datasets (the Iceberg-on-magmalake design from
`Refinery/docs/DATASETS.md`), numbers & learnings, and every paper implemented
with links and where each sits in the pipeline.

`compressHTML: true` in `astro.config.mjs` is load-bearing — Astro 7 defaults it
to `"jsx"`, whose whitespace rules delete the newline between a prose line and
an inline tag on the next one.

Figures in `public/assets/` are generated from real run output — see
`Refinery/docs/JOURNAL.md` for how each number was measured.
