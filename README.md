# GitHub Pages Prep

This repository is now wired for GitHub Pages as a static site.

## What changed

- Added a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`
- Added `.nojekyll` as a branch-deploy fallback if you ever publish directly from the repository instead of GitHub Actions
- Added a `404.html` fallback that returns users to the root splash page
- Replaced root-only navigation in the app with Pages-safe local routing
- Moved the main application shell to `app.html` and kept hash-based deep links there, such as `app.html#details`
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

- `http://localhost:8080/` or `http://localhost:8080/index.html` loads the splash screen
- `http://localhost:8080/app.html#details` opens the `Review Offers` tab
- `http://localhost:8080/index.html` -> `loading.html` -> `app.html` still progresses correctly
- The header menu `Session Info` and `Reset Session` work without sending the browser to a missing route

## Notes

- GitHub Pages now lands on the splash screen by default because the splash is the root `index.html`.
- The main application shell now lives at `app.html`.
