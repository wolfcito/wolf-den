# Wolf Den

 Wolf Den is the intelligence nerve center for the pack’s builder collective, orchestrating AI agents with blockchain-
  native workflows while introducing onboarding mini-games that ease Web2 builders into Web3 habits. Its locale-aware
  dashboard unifies quests, mentorship, taberna experiences, on-chain stats, and Self-powered identity verification so contributors can learn, play, and collaborate securely across every territory.

## Highlights
- Locale-aware routing with `next-intl`, shipping English (`en`) and Spanish (`es`) packs out of the box
- Feature surface grouped under `src/app/[locale]/(den)` with reusable modules in `src/components/{den,modules,ui}`
- Self identity verification via `@selfxyz/core`/`@selfxyz/qrcode` and the `/api/self/verify` endpoint
- Tailwind CSS v4 (PostCSS pipeline) layered with custom “wolf” tokens for consistent visuals
- Biome-enforced TypeScript 5 + React 19 codebase using Next.js 15 and Turbopack in development

## Requirements
- Node.js 20.11+ (Node 22 recommended)
- npm 10+ or pnpm 9+
- A tunnel (ngrok, Cloudflare, etc.) when testing Self verification against mobile apps

## Quick Start
1. Install dependencies: `npm install`
2. Create `.env.local` (see Environment section) and restart the dev server when you change variables
3. Launch the Turbopack dev server: `npm run dev`
4. Visit `http://localhost:3000` — the middleware will redirect to `/en` by default
5. Run `npm run lint` before opening a PR; add `npm run format` for bulk formatting

## Environment

- The Self widget requires the verifier endpoint to be reachable from the mobile app; expose `http://localhost:3000/api/self/verify` via a tunnel during local testing.
- Restart `npm run dev` after editing environment variables so the App Router picks them up.

## Scripts
- `npm run dev` – Next.js dev server with Turbopack
- `npm run build` – Production build (Turbopack compatible)
- `npm run start` – Serve the production build
- `npm run lint` – Biome lint and static analysis
- `npm run format` – Apply Biome formatting fixes

## Project Layout
```
src/
  app/
    [locale]/
      (den)/            # Auth, quests, mentorship, leaderboard, taberna, etc.
      layout.tsx        # Locale provider wiring
      page.tsx          # Landing page (delegates to components/home)
    api/self/verify     # Self attestation verification route
    layout.tsx          # Global fonts, theme bootstrap
    globals.css         # Tailwind layer + theme tokens
  components/
    home/               # Landing hero experience
    den/                # Shell chrome (SidebarNav, TopBar, ActivityRail)
    modules/            # Feature widgets (QuestsGrid, MentorBooking, etc.)
    ui/                 # Cross-feature UI (LanguageSwitcher, MiniChat)
  i18n/                 # next-intl routing + message loaders
middleware.ts           # Locale middleware powered by next-intl
```

Keep shared UI inside `src/components`. Route-specific assets belong in their page folder when reuse is unlikely.

## Localization
- Routing is handled by `src/i18n/routing.ts` and `src/middleware.ts`.
- Messages live in `src/i18n/messages/{locale}.json`. Add keys in English first, mirror them in other locales, and keep JSON alphabetical when practical.
- Components fetch translations with `next-intl` hooks (`useTranslations`, `t.raw` for structured data).
- `LocaleLangSetter` keeps the `<html lang>` attribute in sync with the active locale; update it if you add new locales.

## Styling and Theming
- Tailwind CSS v4 is configured through `postcss.config.mjs`; restart the dev server after tweaking PostCSS or Tailwind setup.
- `globals.css` defines the “wolf” color tokens used throughout the dashboard. Extend tokens here instead of inlined hex values.
- Fonts: Geist (sans + mono) from Vercel plus Bitcount Single Ink for headlines. Global font setup resides in `src/app/layout.tsx`.
- A simple localStorage-backed script (`wolf-den-theme`) seeds `data-theme` for future light/dark work; preserve it if you expand theme support.

## Self Verification Flow
- `/api/self/verify` uses `@selfxyz/core` to validate proofs server-side. It currently allows attestation id `1` and enforces age ≥ 18 with OFAC screening.
- For sandboxed development, set `SELF_USE_SANDBOX=true` to skip live verification while keeping the flow intact.

## Development Workflow
- Use TypeScript strict mode—export component prop types and avoid `any`.
- Tailwind utility-first styling is preferred in JSX; share patterns via components instead of copying class strings.
- Biome enforces import sorting and code style; run `npm run format` when bulk editing or before committing large refactors.
- No automated test suite ships today. Smoke-test changes manually via `npm run dev` and capture screenshots for UI updates in PRs.
- Conventional commits keep history tidy (e.g., `feat: add mentorship availability filter`).

## Deployment
- Run `npm run build` to produce the production bundle and `npm run start` to serve it.
- Ensure environment variables are provided in your hosting platform. The Self verifier must be reachable over HTTPS, and any iframe origins (e.g., `NEXT_PUBLIC_TABERNA_URL`) should permit camera/microphone usage.

## Contributing
- Open issues or start discussions before shipping large feature work so we can align on UX and platform requirements.
