# Cai Yimiao — Portfolio

Personal resume/portfolio website. Static site (HTML/CSS/JS), no build step. Ready for GitHub Pages.

## Local preview
Just open `index.html` in a browser, or run a tiny server:
```bash
python -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to GitHub Pages (`<username>.github.io`)
1. Create a **public** repo on GitHub named **exactly** `<your-username>.github.io`
   (e.g. `caiyimiao.github.io`). A repo with this name auto-publishes at
   `https://<your-username>.github.io`.
2. From this folder, push the files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main` / `/ (root)`. Save. Live in ~1 minute at `https://<your-username>.github.io`.

## Custom subdomain (like the `is-a.dev` example)
`is-a.dev` gives free `yourname.is-a.dev` subdomains. After your Pages site is live:
1. Fork https://github.com/is-a-dev/register
2. Add `domains/<yourname>.json` pointing a CNAME to `<your-username>.github.io`.
3. Open a pull request. Once merged, add a `CNAME` file containing `yourname.is-a.dev`
   to this repo and set the custom domain under Settings → Pages.

## Adding your images
See `images/README.md` for the exact filenames to use. Placeholders show until you add them.
