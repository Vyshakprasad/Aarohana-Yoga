# Aarohana Yoga Website

Custom static website for Aarohana Yoga, a yoga and healing studio in RR Nagar, Bengaluru founded by Dr. Meenakshi K S.

The site is built with plain HTML, CSS, and JavaScript. There is no framework, package manager, or build step.

Live site: `https://vyshakprasad.github.io/Aarohana-Yoga/`

## Project Structure

```text
aarohana-yoga/
├── index.html
├── events.json
├── css/
│   └── main.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── logo-footer.png
│   ├── logo-icon.png
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── hero-lifestyle.png
│   ├── meenakshi.jpeg
│   ├── meenakshi-about.jpeg
│   ├── shashi.jpeg
│   ├── veeresh.jpg
│   ├── events/
│   │   ├── inner-child-healing.png
│   │   ├── kids-summer-camp.png
│   │   └── meditation-for-healing.png
│   └── gallery/
│       └── gallery-01.jpeg through gallery-56.jpeg
└── pages/
    ├── about.html
    ├── services.html
    ├── gallery.html
    └── events.html
```

## Brand

Studio: Aarohana Yoga  
Tagline: Flow, Heal, Evolve  
Founder: Dr. Meenakshi K S  
Address: 135B, 2nd Floor, Opp HDFC Bank, Jawaharlal Nehru Rd, BEML Layout, 4th Stage, Rajarajeshwari Nagar, Bengaluru - 560098  
Phone: +91 9036915656 / +91 80 35947279  
Email: aarohanayoga@gmail.com  
WhatsApp: `http://wa.me/919036915656`  
Instagram: `https://www.instagram.com/aarohanayoga`  
Facebook: `https://www.facebook.com/share/173X7oMKS6/`

Primary colors are defined in `css/main.css`:

```css
--gold: #B8935A;
--gold-light: #D4AC72;
--gold-pale: #EDD9B4;
--teal: #2E6B5E;
--teal-mid: #4A8577;
--teal-light: #7AAF9F;
--cream: #F7F3EC;
--warm-white: #FDFAF5;
--charcoal: #2C2C2C;
--mid-grey: #6B6B6B;
--light-grey: #E8E3DC;
```

Typography:

- Headings: Cormorant Garamond
- Body, labels, buttons: Jost

## Current Pages

`index.html`

- Home page with hero, founder intro, lifestyle banner, services, reasons to choose Aarohana, testimonials, sample schedule, contact details, Google Maps embed, and contact form.
- Contact form is still frontend-only and needs a Formspree endpoint or another form backend.
- Testimonials use public student reviews from Aarohana's Wix site and Justdial.
- Schedule table is sample data and should be confirmed before relying on it publicly.

`pages/about.html`

- About/founder page with stats, Dr. Meenakshi's story, awards, credentials, philosophy, mission and vision, trainers, and CTA.
- Trainer images are local assets.

`pages/services.html`

- Expanded service detail page for all 11 offerings.
- The top service menu links to each detailed section on the same page.
- Homepage service cards link directly to the corresponding section on this page.
- The main navigation Services item points to this page.

`pages/gallery.html`

- Gallery page with 56 local images.
- Filters: All Photos, Yoga Poses, Group Classes, Studio Life.
- Lightbox supports click, keyboard navigation, image counter, and ESC close.
- Gallery categories are currently assigned by filename ranges and may need manual review.

`pages/events.html`

- Events page with filter tabs for All, Upcoming, and Past.
- Event cards are rendered from an inline JavaScript array so the page works when opened locally through `file:///`.
- `events.json` mirrors the same event content for easier reference and future migration.
- Poster-style event images are stored in `images/events/` and displayed with `object-fit: contain` so flyers are visible without cropping.

## Editing Events

Update event data in both places:

1. `pages/events.html` inside the `EVENTS` array
2. `events.json`

The events page uses the inline data. The JSON file is a mirror for documentation, future fetch-based use, or external editing.

Example event shape:

```json
{
  "id": "unique-event-slug",
  "title": "Event Title",
  "status": "upcoming",
  "date": "2026-05-04",
  "date_label": "4 May - 22 May 2026",
  "time": "10:30 AM - 12:30 PM",
  "location": "Aarohana Yoga Studio, RR Nagar, Bengaluru",
  "tagline": "Short event tagline.",
  "description": "One clear paragraph describing the event.",
  "category": "Workshop",
  "image": "../images/events/example.png",
  "price": "3499",
  "seats": "",
  "audience": "Who this event is for",
  "enroll_by": "Enroll by 2 May 2026",
  "register_url": "http://wa.me/919036915656"
}
```

Notes:

- `date` controls countdowns and upcoming/past filtering.
- `date_label` is optional and should be used for multi-day events.
- Use `../images/events/...` inside `pages/events.html`.
- Use `images/events/...` inside `events.json`.
- If `price` is blank, the card shows "Free / Enquire".
- If `audience`, `enroll_by`, or `seats` are blank, those rows are hidden.

## Shared Components

Navigation:

- Shared across all pages.
- Desktop navigation includes About, Services, Schedule, Testimonials, Gallery, Events, and Book a Class.
- Mobile navigation uses a hamburger dropdown.
- Active page is highlighted.

Footer:

- Shared across all pages.
- Uses `logo-footer.png`, which is pre-composited for the dark footer background.
- Do not replace it with `logo.png`; the normal logo can look faint on the footer.

WhatsApp floating button:

- Present on all pages.
- Tooltip appears on every page reload.
- Opens WhatsApp to `+91 9036915656`.

## Deployment

This is a static site. To deploy:

1. Commit the changed files.
2. Push to the GitHub repository.
3. GitHub Pages should update automatically in about a minute.

No build command is needed.

## Known Pending Work

- Wire the contact form to Formspree or another backend.
- Confirm and update the class schedule.
- Manually review gallery categories.
- Add FAQ page.
- Add Blog / Wellness Journal page.
- Consider adding richer SEO metadata and Open Graph preview images for each page.
