# Placeholders to Replace

Everything below is a stand-in so the site looks complete today. Swap each item
with real content when you have it. All content lives in **`src/data/site.js`**
unless noted otherwise.

## 1. Prices (`src/data/site.js` → `services[].priceFrom`)

Each service currently shows **`₹—`**. Replace with real starting prices, e.g.:

```js
{ slug: 'visiting-cards', ..., priceFrom: '₹250 / 100 cards' }
```

| Service | Current | Your price |
|---|---|---|
| Wedding Cards | ₹— | |
| Visiting Cards | ₹— | |
| Letterheads | ₹— | |
| Invoices / Bill Books | ₹— | |
| Brochures / Flyers | ₹— | |
| Stickers / Labels | ₹— | |
| Others / Custom | ₹— | |

## 2. Photos

Currently using `picsum.photos` placeholder images and the existing
`public/hero.png`. Replace with your real Google-hosted / uploaded photos.

**Recommended approach:** drop real images into `public/gallery/` and point to
them, e.g. `src: '/gallery/wedding-01.jpg'`.

- **Hero** — `public/hero.png` (already your real photo ✅)
- **Service card images** — `src/data/site.js` → `services[].image`
- **Gallery images** — `src/data/site.js` → `galleryItems[].src` (12 items)
- **About page photos** — `src/pages/About.jsx` → `shopPhotos` (shop front, machine, founder) and the "More" tile in `src/pages/Home.jsx`

> Keep the `alt` text descriptive when you swap — it's already written for SEO.

## 3. Social links (`src/data/site.js` → `business.socials`)

```js
socials: {
  instagram: '',  // e.g. 'https://instagram.com/parisarascreens'
  facebook: '',   // e.g. 'https://facebook.com/parisarascreens'
}
```

Until filled, the footer shows "Instagram & Facebook links coming soon" and the
icons link to `#`.

## 4. The "other 2 details" you mentioned

You said you'd share two more details later — add them here / tell me where they
should go (e.g. an extra service, a landmark, GST info, etc.).

## 5. Optional polish

- **Google Maps embed** — currently a keyless address-query embed
  (`business.mapsEmbed`). For a pin-perfect embed, paste the `src` from Google
  Maps → Share → *Embed a map*.
- **Domain** — update `url` in the JSON-LD block and OG tags in `index.html`
  once the real domain is live.
