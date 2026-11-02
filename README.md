# TenLoop site (Next.js)

Home page coded from the Figma frame **Light Version** (`Design-System` file, node `2019:714`).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Deploy: push to GitHub and import the repo in Vercel (no settings needed).

## Where things live

| Path | What it is |
| --- | --- |
| `app/page.tsx` | Home page sections: Hero, Clients, Services, Testimonials, Pricing |
| `app/globals.css` | Design tokens (mirror the Figma variables) + all styles, responsive at 1280 / 1024 / 720px |
| `components/ui.tsx` | Shared pieces: Header, Badge, display heading, stars |
| `lib/content.ts` | All page copy (services, testimonials, plans…). Swap this for a CMS later. |
| `public/assets/` | Icons, logos and images exported from Figma |
| `scripts/` | The scripts that wrote the Figma SVG exports into `public/assets` |

## Next pages

The **Contact Us** page is designed in the same Figma file (frame "Contact Us – Light", to the right of
"Dark Version"). Once it's final in Figma, build it as `app/contact/page.tsx` reusing `Header`, `Badge`
and the tokens in `globals.css`.
