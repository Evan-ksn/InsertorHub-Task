# Adore Beauty H1 FY26 Retail Shareholder Hub

A polished, interactive shareholder communication prototype built for the InvestorHub GTM Internship hiring task.

This is not a review of Adore Beauty's PDF. It is a redesigned retail shareholder experience that turns a static results announcement into a guided investor hub.

## Core idea

Adore Beauty communicates beautifully to customers, but mechanically to shareholders.  
The H1 FY26 result contains the right ingredients, but retail shareholders need a clearer path through:

- What changed this half
- What improved vs what needs watching
- How the omni-channel strategy is meant to create operating leverage
- What to monitor next half

## Dashboard sections

- 30-second result summary
- Improved vs watch stakeholder trade-off view
- Strategy logic chain
- Metric trend selector
- Channel quality lens
- Interactive Australia store footprint map
- Target progress tracker
- Financial quality watchlist
- Retail shareholder FAQ

## Run locally

Use VS Code Live Server or any local server.

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Do not open `index.html` directly using `file://`, because the Vega map loads local JSON files from the `data/` folder and Chrome may block them.

## Tech

- HTML
- CSS
- Vega-Lite
- Vega Embed
- Local JSON data

## Notes

All figures are manually transcribed from Adore Beauty's H1 FY26 Results Presentation and organised into a more shareholder-friendly experience.
