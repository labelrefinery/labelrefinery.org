# labelrefinery.org

The project site. [Astro](https://astro.build), static, deployed to Cloudflare
Workers static assets — plus one small Worker for the `/ph/*` analytics proxy
(see below), which no other path touches.

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

Analytics is [PostHog](https://posthog.com) (US cloud), initialised in the head
of `src/layouts/Base.astro`. Requests are proxied first-party through `/ph`
(`worker/posthog-proxy.js`, which `wrangler.jsonc`'s `assets.run_worker_first`
routes only `/ph/*` to — every other request is still served straight from
`dist/` with no Worker invocation) so ad-blockers that drop `*.posthog.com`
don't drop it, and so the client IP forwards for geolocation without ever
handing PostHog a first-party cookie. The client is configured with
`persistence: 'memory'`, so it sets no cookies and writes nothing to
`localStorage` — there is nothing to disclose and no consent banner is needed.

The project key lives in `src/data/site.ts` (`POSTHOG_KEY`) and is the same
public token magmalake.org and mojoshelf.org use — one PostHog project for all
three sites, told apart by `$host`. It's a `phc_` token, safe to embed. To
disable analytics, set `POSTHOG_KEY` to anything not starting with `phc_`;
`Base.astro` then omits the snippet entirely.
