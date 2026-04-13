# GitHub Pages Prep

This repository is now wired for GitHub Pages as a static site.

## What changed

- Added a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`
- Added `.nojekyll` as a branch-deploy fallback if you ever publish directly from the repository instead of GitHub Actions
- Added a `404.html` fallback that returns users to `index.html`
- Replaced root-only navigation in the app with Pages-safe local routing
- Added hash-based tab URLs in `index.html` so links like `index.html#details` resolve to the correct tab
- Added `js/site-paths.js` so page-to-page navigation works from a GitHub Pages project subpath

## One-time GitHub setup

1. Push the repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` or manually run the `Deploy GitHub Pages` workflow.

## Verification

Run the repository validation script:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\verify-github-pages.ps1
```

Pass looks like:

- The script exits with `GitHub Pages validation passed.`
- No missing file or forbidden redirect errors are printed

Serve the site locally before publishing:

```powershell
python -m http.server 8080
```

Then verify:

- `http://localhost:8080/index.html` loads successfully
- `http://localhost:8080/index.html#details` opens the `Review Offers` tab
- `http://localhost:8080/splash.html` -> `loading.html` -> `index.html` still progresses correctly
- The header menu `Session Info` and `Reset Session` work without sending the browser to a missing route

## Notes

- GitHub Pages will use `index.html` as the default landing page. `splash.html` remains available as a direct URL.
- If you want the splash page to be the root landing page, that needs a separate file-rename pass because the current main application shell is still `index.html`.
