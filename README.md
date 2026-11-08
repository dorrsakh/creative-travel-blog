# Creative Travel Blog

Frontend-only website project based on the [Creative Travel Blog Figma Sites file](https://www.figma.com/site/Nz1yJ22PsGE37PdUVWspxS/Creative-Travel-Blog--Community-?node-id=0-1).

## Status

Next.js, TypeScript, Tailwind CSS, and Motion foundation. **The design implementation is not complete:** Figma connector access is currently denied. The root page is an explicit project-status placeholder, not a reproduction of the design.

Planned pages observed in the shared file: Home, Archive, Article, and About. Planned motion includes entrance transitions, scroll reveals, and hover/tap feedback with reduced-motion support. No backend is in scope.

## Development

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

```sh
npx tsc --noEmit
npm run build
```

The exact component library will be confirmed if “beUI” refers to a specific package. Do not commit credentials or configuration from the parent directory.
