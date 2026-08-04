# Enabling Time-Domain Science with LSST EDP2

Static website for the "Enabling Time-Domain Science with LSST EDP2" workshop
(Sep 22–25, 2026, University of Pittsburgh). Plain HTML/CSS/JS, no build step
— deployed via GitHub Pages.

## Running locally

From the repository root, start any static file server, for example:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Structure

```
├── index.html          # Overview, dates, LINCC Frameworks / LSST Discovery Alliance funding acknowledgment
├── schedule.html        # Renders data/schedule.json
├── speakers.html         # Renders data/speakers.json
├── venue.html           # Venue, travel, lodging, LOC
├── register.html         # Placeholder registration (Google Form link TBD)
├── abstracts.html         # Placeholder abstract submission (Google Form link TBD)
├── css/style.css         # Shared styling (Pitt blue/gold accents)
├── js/
│   ├── schedule.js        # fetch() + render logic for data/schedule.json
│   └── speakers.js         # fetch() + render logic for data/speakers.json
└── data/
    ├── schedule.json      # Day-by-day agenda
    └── speakers.json       # Organizers & Co-Investigators
```

Schedule and speaker content live in `data/*.json` so they can be updated
without touching HTML/JS. See `CLAUDE.md` for project conventions.

## Deployment

Enable GitHub Pages for this repository (Settings → Pages → deploy from
`main` branch, root directory). No build step is required.
