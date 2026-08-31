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
pipelines, numbers & learnings, and every paper implemented with links and where
each sits in the pipeline.

Figures in `public/assets/` are generated from real run output — see
`Refinery/docs/JOURNAL.md` for how each number was measured.
