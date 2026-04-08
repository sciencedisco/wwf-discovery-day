# Technical requirements — Science Disco Discovery Sprint

This file defines the technical constraints and coding guidelines for the Discovery Sprint. It is intended to be read by GitHub Copilot as a constitution, so that any code it generates is consistent, accessible, and easy for students to understand and modify.

---

## What we are building

Each team produces a single self-contained HTML page that presents their data findings as an interactive infographic website. The page is published via GitHub Pages and serves as a live portfolio piece the student can share immediately after the day.

---

## Hard constraints

- **One file only.** The entire product must live in a single `index.html` file. No separate CSS files, no JavaScript files, no build tools, no npm, no frameworks.
- **No backend.** Everything runs in the browser. There is no server, no database, and no API calls to external services.
- **GitHub Pages compatible.** The page must render correctly when hosted as a static site on GitHub Pages.
- **CDN only for dependencies.** External libraries must be loaded via CDN links inside the HTML file. Do not require any local installation.
- **Data must be embedded or loaded from CSV.** Chart data should either be embedded directly as a JavaScript array inside the HTML file, or loaded from a CSV file in the same repository using PapaParse.

---

## Page structure

The page must include the following sections in this order:

1. **Header** — the team's project title and a one-sentence summary of what they investigated
2. **Research question** — the question posed by the partner organisation, written out clearly
3. **The data** — a brief description of the dataset used (source, time period, what it contains)
4. **Key findings** — two to four visualisations with a short written interpretation beneath each one
5. **Reflection** — two to three sentences on what the team found surprising or would explore further
6. **Footer** — Science Disco branding, the partner organisation name, and the event date

---

## Approved libraries (CDN only)

Use only the following libraries. Do not suggest or introduce others.

| Purpose | Library | CDN |
|---|---|---|
| Bar, line, donut charts | Chart.js | `https://cdn.jsdelivr.net/npm/chart.js` |
| Interactive maps | Leaflet.js | `https://unpkg.com/leaflet/dist/leaflet.js` |
| Heatmaps | Leaflet.heat plugin | `https://unpkg.com/leaflet.heat/dist/leaflet-heat.js` |
| CSV parsing | PapaParse | `https://cdn.jsdelivr.net/npm/papaparse/papaparse.min.js` |
| Icons | Font Awesome | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css` |
| Fonts | Google Fonts | `https://fonts.googleapis.com` |

---

## Code style guidelines

All generated code must follow these rules so that students with no coding background can read and modify it:

- **Comment every block.** Every `<section>`, every `<script>` block, and every chart initialisation must have a plain-English comment above it explaining what it does.
- **Use descriptive variable names.** No single-letter variables. Name things clearly: `researchQuestion`, `chartLabels`, `mapData`.
- **Keep functions short.** Each function should do one thing. If a function is longer than 20 lines, break it up.
- **Separate data from logic.** Define all chart data as named variables at the top of the script block, separate from the Chart.js or Leaflet initialisation code. This makes it easy for students to swap in their own numbers without touching the chart logic.
- **Avoid inline styles.** All styling should be in a `<style>` block in the `<head>`. Do not use `style=""` attributes on individual elements.
- **No minified or compressed output.** Code must be fully readable and indented.

---

## How to use this file with GitHub Copilot

When prompting Copilot to generate your page, always start your prompt with:

> "Following the technical requirements in TECHNICAL_REQUIREMENTS.md, generate..."

Then describe what you want using your product requirements file (the one your team created during the whiteboard session).

### Example prompts

**Starting the page:**
> "Following the technical requirements in TECHNICAL_REQUIREMENTS.md, generate the full HTML structure for our project page. The research question is: [paste your question]. The page title is: [your title]."

**Adding a chart:**
> "Following the technical requirements in TECHNICAL_REQUIREMENTS.md, add a bar chart to the key findings section. The chart shows [describe what it shows]. The data is: labels [your labels], values [your values]."

**Adding a map:**
> "Following the technical requirements in TECHNICAL_REQUIREMENTS.md, add a Leaflet map centred on the Netherlands showing marker points. The data is in the file data.csv with columns: lat, lon, label."

**Updating data:**
> "The chart data in the barChart variable needs to be updated. Replace the current values with: [your new values]. Do not change anything else."

---

## What to do when something breaks

1. Copy the error message from your browser console (right-click anywhere on the page, click Inspect, go to the Console tab).
2. Paste it into Copilot with the prompt: "I got this error in my index.html. What is causing it and how do I fix it? Do not change anything else in the file."
3. If Copilot's fix introduces new problems, ask your coach for help before running any more prompts.
