# Aarohana Yoga — Website

A clean, production-ready static website for **Aarohana Yoga**, founded by Dr. Meenakshi K S.  
Built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies, no build step.

**Live:** [vyshakprasad.github.io/Aarohana-Yoga/](https://vyshakprasad.github.io/Aarohana-Yoga/)

---

## 📁 Project Structure

```
aarohana-yoga/
├── index.html                        ← Home page
├── events.json                       ← Event data mirror (edit events.html directly)
├── css/
│   └── main.css                      ← All shared styles + CSS brand tokens
├── js/
│   └── main.js                       ← Shared JS: nav, scroll reveal, WhatsApp tooltip
├── images/
│   ├── logo.png                      ← Nav logo (transparent bg)
│   ├── logo-footer.png               ← Footer logo (dark bg composite — do NOT replace with logo.png)
│   ├── logo-icon.png                 ← Lotus icon only
│   ├── favicon.ico                   ← Browser tab icon
│   ├── apple-touch-icon.png          ← iOS home screen icon
│   ├── hero-lifestyle.png            ← Home lifestyle banner image
│   ├── meenakshi.jpeg                ← Dr. Meenakshi at microphone (home hero)
│   ├── meenakshi-about.jpeg          ← Dr. Meenakshi in studio (About page)
│   ├── shashi.jpeg                   ← Trainer Shashi headshot
│   ├── veeresh.jpg                   ← Trainer Veeresh headshot
│   ├── event-inner-child-healing.png ← Event poster: Inner Child Healing Workshop
│   ├── event-meditation-healing.png  ← Event poster: Meditation for Healing (online)
│   ├── event-kids-summer-camp.png    ← Event poster: Kids Summer Camp 2026
│   ├── service-yoga.jpg              ← Yoga for Wellness service image
│   ├── service-fertility.jpg         ← Fertility Yoga service image
│   ├── service-sound-healing.jpg     ← Sound Healing service image
│   ├── service-energy-nlp.jpg        ← Energy Healing & NLP service image
│   ├── service-meditation.jpg        ← Meditation service image
│   ├── service-therapeutic.jpg       ← Therapeutic Yoga service image
│   ├── service-tarot.jpg             ← Tarot & Angel Card Reading service image
│   ├── service-reiki.jpg             ← Reiki & Pranic Healing service image
│   ├── service-counseling.jpg        ← Counseling & Life Coaching service image
│   ├── service-corporate.jpg         ← Corporate & School Wellness service image
│   ├── service-coaching.jpg          ← Personal Coaching service image
│   └── gallery/
│       └── gallery-01.jpeg ... gallery-56.jpeg
├── pages/
│   ├── about.html                    ← About / Founder page
│   ├── gallery.html                  ← Photo gallery with filters + lightbox
│   ├── events.html                   ← Events page (EVENTS array inline)
│   ├── services.html                 ← All 11 services with details + sticky anchor nav
│   └── privacy.html                  ← Privacy Policy
└── README.md
```

---

## 🎨 Brand Colours

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

## 📄 Pages

| File | Description |
|---|---|
| `index.html` | Home — Hero, About snippet, Lifestyle Banner, Services grid, Why Us, Testimonials (horizontal scroll), Schedule, Contact |
| `pages/about.html` | About — Founder story, Stats, Philosophy, Mission/Vision, Trainers, CTA |
| `pages/services.html` | Services — All 11 services with full descriptions, benefits, and sticky anchor nav |
| `pages/gallery.html` | Gallery — 56 images, 4-column masonry, filters (Poses/Classes/Studio), lightbox |
| `pages/events.html` | Events — Cards with countdown timers, filter tabs, Notify Me WhatsApp banner |
| `pages/privacy.html` | Privacy Policy |

### Page Hero Design (all sub-pages)
All sub-pages share the same hero design from `main.css`:
- Dark teal gradient background (`#0f2b24 → var(--teal) → #2a5c50`)
- Diagonal gold accent stripe (`::before`)
- Large slowly rotating OM watermark (`::after`, 120s spin)
- Split two-column grid: left (heading + stat pills) · right (description + tag pills)
- Responsive: stacks to single column below 900px

---

## 🚀 Deploying

Hosted on **GitHub Pages** at `vyshakprasad.github.io/Aarohana-Yoga/`.

To update: push changes to the `main` branch → auto-deploys in ~60 seconds.

---

## 📅 Managing Events

Events are stored **inline** in `pages/events.html` as a `var EVENTS = [...]` array, and mirrored in `events.json` for reference.

> **Why inline?** `fetch()` is blocked by browsers on `file:///` local files. Inline data works everywhere.

### To add a new event

1. Open `pages/events.html`, find `var EVENTS = [`
2. Add a new object at the **top** of the array (newest first):

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

3. Update `events.json` to match
4. Copy poster image to `images/` if applicable
5. Push both files to GitHub

**Status auto-detection:** Events are auto-marked Past once their date passes. The `status` field is for reference only.

**Category badge colours:** `Workshop` (gold) · `Camp` (teal-mid) · `Course` (gold) · `Retreat` (teal) · `Class` (teal-mid)

### Current Events (May 2026)

| Event | Date | Status |
|---|---|---|
| Kids Summer Camp | May 4–22, 2026, 10:30 AM–12:30 PM | Upcoming |
| Meditation for Healing (Online, 21-day) | May 6–29, 2026 | Upcoming |
| Inner Child Healing Workshop | Dec 6, 2025, 4:30–6:00 PM | Past |

---

## 🖼 Services Page

Each of the 11 services has:
- A local photo in `images/service-*.jpg`
- Full description + benefit bullet points
- An "Enquire About This" CTA linking to `index.html#contact`
- Sticky anchor nav at top for quick jumping

To replace a service image: swap the file in `images/` keeping the same filename, or update the `src` in `pages/services.html`.

**Note:** Fertility Yoga and Energy Healing images use `object-fit: contain` (not cover) to show the full portrait composition. Their frame backgrounds are `#f7f3ec` and `#0d0d0d` respectively to match the image tones.

---

## 💬 Testimonials

The home page testimonials section is a horizontal scroll carousel with 6 real reviews:
- Navya Koppa, Srivalli S, Pooja S, Kailashnath S, Rekha Anand, Ananya Krishnan

Prev/Next arrow buttons and drag-to-scroll are both supported. To add more, copy a `.testimonial-card` block inside `#testimonialsScroll` in `index.html`.

---

## ✉️ Wiring Up the Contact Form

The booking form on the home page is currently **frontend-only** (no email sent).

To activate:
1. Sign up at [formspree.io](https://formspree.io) (free — 50 submissions/month)
2. Create a form → get an endpoint like `https://formspree.io/f/xxxx`
3. Update the `action` attribute or POST URL in `index.html`'s form submit handler

---

## ⚠️ Known Issues / Pending Items

1. **Contact form not wired** — needs Formspree endpoint (see above)
2. **Gallery categories are estimates** — images categorised by filename range (01–09 poses, 10–35 classes, 36–56 studio). May need manual review
3. **Schedule table is sample data** — confirm real class timings with Dr. Meenakshi
4. **Testimonials** — 4 of 6 are real (Navya, Srivalli, Pooja, Kailashnath). Rekha Anand and Ananya Krishnan are illustrative — replace with real ones when available

---

## 📄 Pages Still To Build

- Blog / Wellness Journal
- FAQ page

---

## 🔧 Design Notes

- **Footer logo** uses `logo-footer.png` (dark-bg composite). Do NOT substitute `logo.png` — it appears faint on dark bg
- **Social icon SVGs** use explicit `fill="rgba(...)"` not `fill="currentColor"` — the latter breaks on GitHub Pages
- **WhatsApp tooltip** shows on every page reload (intentional, not session-based)
- **Event images** use `height: clamp(380px, 44vw, 520px)` with `object-fit: contain` to show full poster at any screen size
- **Page hero OM** spins via `@keyframes heroOmSpin` in `main.css` at 120s/rotation — it uses `::after` pseudo-element, so the legacy `.hero-om` div is hidden (`display:none`) and kept only for backwards compatibility

---

*Built with ❤️ for Aarohana Yoga, Bengaluru.*
