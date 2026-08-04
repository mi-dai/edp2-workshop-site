# Project: EDP2 Time-Domain Workshop Website

## Event
- Title: "Enabling Time-Domain Science with LSST EDP2"
- Dates: Sep 22–25, 2026
- Venue: University of Pittsburgh
- Funded by: LINCC Frameworks Community Events grant ($25,000 budget)

## Organizers
- Mi Dai — Research Assistant Professor, University of Pittsburgh (PI)
- Rebecca Chen — Stanford/KIPAC/SLAC (Co-PI)

## Site requirements
- Plain HTML/CSS/JS, no framework — deploy to GitHub Pages
- Pages: Home/Overview, Schedule, Speakers/Organizers, Venue & Travel,
  Registration, Abstract Submission, Sponsors
- Schedule and speaker data should live in a separate JSON/YAML file
  (e.g. `data/schedule.json`, `data/speakers.json`) rendered into HTML —
  not hardcoded, since these will be updated frequently
- Acknowledge LINCC Frameworks as funding sponsor on home page and footer
- Registration/abstract submission: placeholder links to Google Forms
  until forms are finalized

## Style
- Clean, minimal academic conference aesthetic
- Pitt color scheme (blue/gold) as accent, not overbearing
- Mobile-responsive

## Conventions
- Keep commits small and scoped (one feature/fix per commit)
- Don't touch `data/*.json` structure without flagging the change
- No external JS frameworks/build step unless explicitly requested
