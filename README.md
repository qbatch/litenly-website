# Litenly website

Marketing site for **Litenly: Photo Compressor** (`com.qbatch.litenly`). Static [Astro](https://astro.build) site with three pages: `/`, `/support` and `/privacy-policy`.

## Develop

Requires Node.js 22.12 or later.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

The static output is written to `dist/`. Deploy that folder to any static host.

## Deploy

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and publishes it to GitHub Pages on every push to `main`. It can also be run by hand from the Actions tab. The repository's Pages source must be **GitHub Actions**. The workflow reads the domain and subfolder from the Pages settings.

## Before publishing

- On a host other than GitHub Pages, set the domain when building, for canonical URLs and social preview images: `SITE_URL=https://your-domain npm run build`.
- Add the App Store URL in `src/data/site.ts` once the listing exists.
- Have the owner and legal counsel review `src/pages/privacy-policy.astro`. Add the company's legal name and a contact method, then update the date.
- Re-check feature and privacy statements against the release build of the app.
- Retake the screenshots in `src/assets/screens/` from the release build.
