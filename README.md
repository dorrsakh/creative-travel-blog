# The Roam Report

A responsive, frontend-only travel journal built from the [Creative Travel Blog Figma reference](https://www.figma.com/site/0iUOBlEkrw78MhI3y6g66T/Creative-Travel-Blog--Community---Copy-).

## Features

- Home, Archive, About, and article pages with eight individual story URLs.
- Sticky desktop sidebar and stacked tablet/mobile layouts.
- Local fonts, optimized WebP photography, and original vector illustrations.
- [beUI](https://beui.dev) Tilt Card, Marquee, and Button components, plus Motion entrance transitions, navigation feedback, and reading progress.
- Reduced-motion support, pausable location ticker, keyboard focus states, skip navigation, alt text, and copy-story-link feedback.
- Static editorial data; no database, authentication, forms service, or backend integration.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run build
npx serve out
```

The production build exports to `out/` and can be hosted by any static file server. No Next.js runtime server is required.

## Content and fidelity

Implementation uses the publicly viewable canvas and layout data downloaded by Figma's browser viewer. Fonts, design colors, illustrations, page structure, story titles, and About copy were recovered from that reference. No edit access was required. Figma connector access remains unavailable.

The original CMS article bodies were unavailable, so articles contain demo editorial copy in `src/components/article.tsx` and `src/data/stories.ts`. Some dates were transcribed from the canvas. Four photo slots reuse other source photographs from the reference; see `ASSETS.md`. This is a close visual recreation, not a pixel-perfect export.

Social icons link to the platforms' homepages because the design did not supply profile destinations. Contact links open the email shown in the design. Replace demo prose, confirm the contact email, and provide social profiles before launching under a real travel brand.

## Editing

- Stories and itineraries: `src/data/stories.ts`
- Main layouts: `src/app/`
- Shared sections: `src/components/travel.tsx`
- Design tokens and responsive styling: `src/app/globals.css`
- Vendored beUI components: `src/components/motion/`

## Credits

beUI components are copyright Saurabh Chauhan, MIT licensed; see `public/BEUI-LICENSE.txt`. Fonts are Gasoek One, Faculty Glyphic, Plus Jakarta Sans, and Xanh Mono, distributed by Google Fonts under the SIL Open Font License. Social icons come from Simple Icons. See `ASSETS.md` for photo sources and substitutions.
