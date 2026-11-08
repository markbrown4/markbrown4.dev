# markbrown4.dev

The source for <https://markbrown4.dev/>, Mark Brown's personal site. It replaces
[yellowshoe.com.au](https://github.com/markbrown4/yellowshoe) (Middleman, 2011–2022).

A static [Astro](https://astro.build/) site. No client-side JavaScript except the
travel map, which loads Leaflet.

## Develop

Node 24 is pinned in `mise.toml`, and Astro 7 needs at least Node 22.23.

```sh
mise install
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serves dist/
```

## Layout

| Path | What |
| --- | --- |
| `src/content/journal/*.md` | Journal posts. The filename is the URL slug, and `<!-- more -->` splits the intro from the rest. |
| `src/pages/` | About (`index`), Journal, CV, plus Philosophy and Travel, which aren't linked from the nav. |
| `src/data/cv.md` | CV body. `{{years}}` is replaced at build time. |
| `src/data/places.json` | Pins for the travel map. |
| `src/styles/global.css` | All styles, with light and dark themes. |
| `public/` | Images, the Calluna font, and two old static pages kept at their URLs: `/super_fun/` and `/standards/`. |

### URLs carried over from yellowshoe.com.au

- `/journal/<slug>/`, `/journal/categories/<tag>/` and `/journal/feed.xml` (Atom) stay the same.
- Journal pagination stays at `/journal/page/2/` and on.

## Deploy (Vercel)

1. Import this repo as a new Vercel project. It detects Astro, so you don't need any settings.
2. **Domains**: add `markbrown4.dev` and `www.markbrown4.dev`, and set `www` to redirect to the apex.
3. Add `yellowshoe.com.au` and `www.yellowshoe.com.au` to this project with a
   308 redirect to `markbrown4.dev`. Vercel keeps the path on these redirects, so old
   journal links land on the same post. Then remove those domains from the old yellowshoe project.

## DNS

The `markbrown4.dev` zone is hosted at DNSimple and managed by Terraform in
[markbrown4/rituals](https://github.com/markbrown4/rituals) (`infra/terraform/main.tf`).
That Terraform manages individual records, so records it doesn't know about are
left alone. The website needs only:

| Name | Type | Value |
| --- | --- | --- |
| `markbrown4.dev` (apex) | `A` | `76.76.21.21`, or whatever Vercel's domain screen shows |
| `www` | `CNAME` | `cname.vercel-dns.com.`, or the project-specific value Vercel shows |

Don't touch these existing records, which belong to Rituals:

- `rituals`, `admin.rituals`: A records pointing at the Rituals droplet
- `resend._domainkey.mail`, `send.mail`, `rsend.mail`: mail for `mail.markbrown4.dev`
- `_dmarc`: TXT

DNSSEC is on for the zone, which is fine with these records. There are no CAA records, so Vercel can issue certificates.

You can add the two records in the DNSimple dashboard, or as `dnsimple_zone_record`
resources next to the Rituals ones.
