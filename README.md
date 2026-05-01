# Aarohana Yoga — Website

A clean, production-ready static website for **Aarohana Yoga**, founded by Dr. Meenakshi K S.  
Built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies, no build step.

**Live:** [vyshakprasad.github.io/Aarohana-Yoga/](https://vyshakprasad.github.io/Aarohana-Yoga/)

---

## 📁 Project Structure

```
aarohana-yoga/
├── index.html                  ← Home page
├── events.json                 ← Event data mirror (for reference — edit events.html directly)
├── css/
│   └── main.css                ← Shared styles + CSS brand tokens
├── js/
│   └── main.js                 ← Shared JS: nav, scroll reveal, WhatsApp tooltip
├── images/
│   ├── logo.png                ← Main logo (transparent bg, used in nav)
│   ├── logo-footer.png         ← Footer logo (dark bg composite — do NOT replace with logo.png)
│   ├── logo-icon.png           ← Lotus icon only
│   ├── favicon.ico             ← Browser tab favicon
│   ├── apple-touch-icon.png    ← iOS home screen icon
│   ├── hero-lifestyle.png      ← Lifestyle banner image
│   ├── meenakshi.jpeg          ← Dr. Meenakshi at microphone (home hero)
│   ├── meenakshi-about.jpeg    ← Dr. Meenakshi in studio (About page)
│   ├── shashi.jpeg             ← Trainer Shashi headshot
│   ├── veeresh.jpg             ← Trainer Veeresh headshot
│   ├── event-inner-child-healing.png  ← Event poster: Inner Child Healing Workshop
│   ├── event-meditation-healing.png   ← Event poster: Meditation for Healing (online)
│   ├── event-kids-summer-camp.png     ← Event poster: Kids Summer Camp 2026
│   └── gallery/
│       └── gallery-01.jpeg ... gallery-56.jpeg
├── pages/
│   ├── about.html              ← About / Founder page
│   ├── gallery.html            ← Photo gallery with filters + lightbox
│   └── events.html             ← Events page (EVENTS_DATA array inline)
└── README.md
```

---

## 🎨 Brand Colours

Derived from the Aarohana Yoga logo:

| Token | Value | Use |
|---|---|---|
| `--teal` | `#2E6B5E` | Primary brand (nav CTA, headings, buttons) |
| `--teal-mid` | `#4A8577` | Hover states, avatar backgrounds |
| `--teal-light` | `#7AAF9F` | Gradients |
| `--gold` | `#B8935A` | Accent (section tags, underlines, badges) |
| `--gold-light` | `#D4AC72` | Footer text, hover highlights |
| `--gold-pale` | `#EDD9B4` | Hero text highlights |
| `--cream` | `#F7F3EC` | Section backgrounds |
| `--warm-white` | `#FDFAF5` | Page background |
| `--charcoal` | `#2C2C2C` | Body text |
| `--mid-grey` | `#6B6B6B` | Muted text |
| `--light-grey` | `#E8E3DC` | Borders, dividers |

Footer background: `#1C2820` (dark forest green)

**Typography:** Cormorant Garamond (serif headings) + Jost (sans body/labels)

---

## 🚀 Deploying

This site is hosted on **GitHub Pages** at `vyshakprasad.github.io/Aarohana-Yoga/`.

To update: push changes to the `main` branch of `github.com/vyshakprasad/Aarohana-Yoga` — GitHub Pages auto-deploys in ~60 seconds.

---

## 📅 Managing Events

Events are stored **inline** in `pages/events.html` as a JavaScript array (`EVENTS`), and mirrored in `events.json` for reference.

> **Why inline?** `fetch()` is blocked by browsers when opening HTML files locally (`file:///`). Inline data works everywhere.

### To add a new event:

1. Open `pages/events.html`
2. Find the `var EVENTS = [` array near the bottom
3. Add a new object at the **top** of the array (newest first):

```json
{
  "id": "unique-slug",
  "title": "Event Name",
  "status": "upcoming",
  "date": "YYYY-MM-DD",
  "time": "5:00 PM – 7:00 PM",
  "location": "Full address or 'Online'",
  "tagline": "Short italic subtitle",
  "description": "Full description paragraph.",
  "category": "Workshop",
  "image": "../images/your-poster.png",
  "price": "500",
  "seats": "20",
  "register_url": "http://wa.me/919036915656"
}
```

4. Also update `events.json` to keep it in sync
5. If you have an event poster image, copy it to `images/` and set the `"image"` field
6. Push both files to GitHub

**Status auto-detection:** The page automatically marks events as "Past" once their date has passed. The `status` field is for reference only.

**Category badges supported:** `Workshop`, `Camp`, `Course`, `Retreat`, `Class`

---

## 📄 Pages

| File | Description |
|---|---|
| `index.html` | Home — Hero, About snippet, Lifestyle Banner, Services, Why Us, Testimonials, Schedule, Contact |
| `pages/about.html` | About — Founder story, Stats, Philosophy, Mission/Vision, Trainers, CTA |
| `pages/gallery.html` | Gallery — 56 images, 4-column masonry, filters (Poses/Classes/Studio), lightbox |
| `pages/services.html` | Services — All 11 services with full descriptions, benefits, and anchor nav |
| `pages/events.html` | Events — Cards with countdown timers, filter tabs, Notify Me WhatsApp banner |

### Current Events (as of April 2026)

| Event | Date | Status |
|---|---|---|
| Kids Summer Camp | May 4–22, 2026 | Upcoming |
| Meditation for Healing (Online, 21-day) | May 6–29, 2026 | Upcoming |
| Inner Child Healing Workshop | Dec 6, 2025 | Past |

---

## ✉️ Wiring Up the Contact Form

The booking form on the home page is currently **frontend-only** (animation only, no email sent).

To make it functional:
1. Sign up at [formspree.io](https://formspree.io) (free — 50 submissions/month)
2. Create a new form → get an endpoint like `https://formspree.io/f/xxxx`
3. In `index.html`, update the form's `action` attribute or the fetch POST URL in the submit handler

---

## ⚠️ Known Issues / Pending Items

1. **Contact form not wired up** — needs Formspree endpoint (see above)
2. **Gallery categories are estimates** — images were categorised by filename range (01–09 poses, 10–35 classes, 36–56 studio). May need manual review
3. **Schedule table is sample data** — real class timings need confirmation from Dr. Meenakshi
4. **Testimonials** — only 1 real testimonial (Navya Koppa). 2 placeholders (Priya Sharma, Rahul Nair) should be replaced with real ones

---

## 📄 Pages Still To Build

- Blog / Wellness Journal
- Services expanded detail page
- FAQ page

---

## 🔧 Design Notes

- **Footer logo** uses `logo-footer.png` (dark-background composite). Do NOT substitute `logo.png` — it will appear faint
- **Social icon SVGs** use explicit `fill="rgba(...)"` not `fill="currentColor"` — the latter breaks on GitHub Pages
- **WhatsApp tooltip** shows on every page reload (not session-based) — this is intentional
- **Event images** use `object-position: top center` so poster tops (titles) are always visible

---

*Built with ❤️ for Aarohana Yoga, Bengaluru.*
