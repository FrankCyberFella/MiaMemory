# Mia's Memory Game

A kid-friendly memory matching game (Concentration-style) built for tablets and phones. Flip two cards, find the matching pair, and clear the board — no timers, no penalties, just fun.

Play it at: **https://frankcyberfella.github.io/miamemory/**

## Features

- Five themes: Animals 🐶, Food 🍎, Vehicles 🚗, People 🧑 (all emoji), and Family 👪 (real photos — bundled ones in `family-photos/`, plus photos you add from your own device)
- Three difficulty levels: Easy (3 pairs), Medium (6 pairs), Hard (8 pairs)
- Big tap targets, bright colors, gentle flip animation
- Star tracker and confetti celebration on a win
- Installable as an app on iPhone, iPad, and Android (PWA with offline support)

## Installing on a phone/tablet

1. Open the site above in Safari (iOS) or Chrome (Android).
2. iOS: tap Share → **Add to Home Screen**. Android: tap the menu → **Install app** (or you'll get an automatic install prompt).
3. Launch it from the home screen icon like any other app — it works offline after the first load.

## Running locally

It's a static site — no build step. Serve the folder with any static server, e.g.:

```
npx serve .
```

Then open the printed local URL in a browser.

## Tech

Single-file vanilla HTML/CSS/JS, no frameworks or dependencies. Service worker caches assets for offline play.
