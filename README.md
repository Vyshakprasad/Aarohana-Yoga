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
│   ├── logo-footer.png               ← Footer logo (transparent bg, RGBA PNG)
│   ├── logo-icon.png                 ← Lotus icon only
│   ├── favicon.ico                   ← Browser tab icon
│   ├── favicon-16.png                ← Favicon 16×16
│   ├── favicon-32.png                ← Favicon 32×32
│   ├── favicon-192.png               ← Android home screen icon
│   ├── favicon-512.png               ← PWA / high-res icon
│   ├── apple-touch-icon.png          ← iOS home screen icon (180×180)
│   ├── hero-lifestyle.png            ← Home lifestyle banner image
│   ├── meenakshi.jpeg                ← Dr. Meenakshi at microphone (home hero)
│   ├── meenakshi-about.jpeg          ← Dr. Meenakshi in studio (About page)
│   ├── shashi.jpeg                   ← Trainer Shashi headshot
│   ├── veeresh.jpg                   ← Trainer Veeresh headshot
│   ├── event-inner-child-healing.png ← Event poster: Inner Child Healing Workshop
│   ├── event-meditation-healing.png  ← Event poster: Meditation for Healing (online)
│   ├── event-kids-summer-camp.png    ← Event poster: Kids Summer Camp 2026
│   ├── service-yoga.jpg              ← Yoga for Wellness
│   ├── service-fertility.jpg         ← Fertility Yoga
│   ├── service-sound-healing.jpg     ← Sound Healing Therapy
│   ├── service-energy-nlp.jpg        ← Energy Healing & NLP
│   ├── service-meditation.jpg        ← Meditation & Pranayama
│   ├── service-therapeutic.jpg       ← Therapeutic Yoga
│   ├── service-tarot.jpg             ← Tarot & Angel Card Reading
│   ├── service-reiki.jpg             ← Reiki & Pranic Healing
│   ├── service-counseling.jpg        ← Counseling & Life Coaching
│   ├── service-corporate.jpg         ← Corporate & School Wellness
│   ├── service-coaching.jpg          ← Personal Coaching
│   └── gallery/
│       └── gallery-01.jpeg ... gallery-70.jpeg
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
| `index.html` | Home — Hero, About snippet, Lifestyle Banner, Services grid, Why Us, Testimonials (horizontal scroll), Schedule, Contact + Form |
| `pages/about.html` | About — Founder story, Stats, Philosophy, Mission/Vision, Trainers, CTA |
| `pages/services.html` | Services — All 11 services with full descriptions, benefits, sticky anchor nav |
| `pages/gallery.html` | Gallery — 70 images, 4-column masonry, filters (Poses/Classes/Studio), lightbox with fade-in loading |
| `pages/events.html` | Events — Cards with countdown timers, filter tabs, Notify Me WhatsApp banner |
| `pages/privacy.html` | Privacy Policy |

### Page Hero Design (all sub-pages)
Every sub-page shares the same hero via `main.css`:
- Dark teal gradient background (`#0f2b24 → var(--teal) → #2a5c50`)
- Diagonal gold accent stripe (`::before` pseudo-element)
- Large slowly rotating OM watermark (`::after`, 120s spin via `@keyframes heroOmSpin`)
- Split two-column grid: **left** (heading + stat pills) · **right** (description + tag pills)
- Stacks to single column below 900px

---

## 🚀 Deploying

Hosted on **Netlify**.

To update: push changes to the connected Git branch → Netlify auto-deploys in ~30 seconds.

> **Note:** The site was previously hosted on GitHub Pages. If still using GitHub Pages, the Netlify Forms integration will not work — use GitHub Pages with Formspree instead.

---

## ✉️ Contact Form (Netlify Forms)

The booking form uses **Netlify Forms** — no third-party service needed. Netlify detects the form automatically at deploy time via the `data-netlify="true"` attribute and the hidden `form-name` input.

Submissions appear in your **Netlify dashboard** under: Site → Forms → `booking`

You can also set up email notifications in: Netlify dashboard → Forms → Form notifications → Add notification → Email.

### How it works
- The form POSTs to `/` with `application/x-www-form-urlencoded` content type
- Netlify intercepts it server-side before it reaches any JS
- Success/error feedback is shown inline without a page reload
- Includes a honeypot field (`bot-field`) for spam protection

### ⚠️ Local testing
**Netlify Forms only works on the deployed Netlify site** — it will not work locally or on any other host. To test locally:
```bash
cd aarohana-yoga
python3 -m http.server 8000
```
The form submission will silently fail locally (no Netlify to intercept it), but the UI feedback will still show. Test the real form on the deployed Netlify URL.

---

## 📅 Managing Events

Events are stored **inline** in `pages/events.html` as a `var EVENTS = [...]` array, mirrored in `events.json` for reference.

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
  "register_url": "http://wa.me/919036915656?text=Your+pre-filled+message"
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

### Notify Me button
The Notify Me banner on the events page is fully functional — no backend needed. The visitor enters their WhatsApp number, clicks Notify Me, and WhatsApp opens pre-filled with a notification request message sent directly to Dr. Meenakshi's number.

---

## 💬 WhatsApp Integration

All WhatsApp links across the site include pre-drafted messages:

| Location | Message |
|---|---|
| Float button (all pages) | General enquiry about classes and services |
| "Chat on WhatsApp" CTA buttons | Request to book a trial class with timing |
| Events "Register Now" buttons | Event-specific registration message |
| Events "Notify Me" banner | Notification request with user's number |
| Contact form error fallback | Book a trial class message |

To update any pre-filled message, find the relevant `wa.me/919036915656?text=` link and edit the URL-encoded text.

---

## 🖼 Services Page

Each of the 11 services has a local photo in `images/service-*.jpg`, full description, benefit bullet points, and a CTA linking to `index.html#contact`.

**Special image notes:**
- Fertility Yoga and Energy Healing use `object-fit: contain` (not cover) to show the full portrait composition
- Their frame backgrounds are `#f7f3ec` (cream) and `#0d0d0d` (black) respectively to match image tones

To replace a service image: swap the file in `images/` keeping the same filename, or update the `src` in `pages/services.html`.

---

## 🖼 Footer Logo

The footer logo (`images/logo-footer.png`) is a transparent RGBA PNG — the dark green background was removed programmatically so it sits cleanly on the footer's `#1C2820` background without any visible box.

> **Do NOT replace with a non-transparent version** — it will show a visible coloured box in the footer.
>
> If you need to update the logo: open the new logo in an image editor, export as PNG with a transparent background, and replace the file. Alternatively, if you only have a dark-bg version, the background can be keyed out using the same Python script approach used during development.

---

## 💬 Testimonials

The home page testimonials section is a horizontal scroll carousel with 6 reviews:
- **Real:** Navya Koppa, Srivalli S, Pooja S, Kailashnath S
- **Illustrative:** Rekha Anand, Ananya Krishnan — replace with real ones when available

To add more: copy a `.testimonial-card` block inside `#testimonialsScroll` in `index.html`.

---

## ⚠️ Known Issues / Pending Items

1. **Contact form only works on deployed Netlify site** — Netlify Forms requires the Netlify infrastructure to intercept form POSTs. It will not work locally or on other hosts.
3. **Gallery categories are estimates** — images categorised by filename range (01–09 poses, 10–35 classes, 36–56 studio, 57–70 classes/kids camp). May need manual review.
4. **Schedule table is sample data** — confirm real class timings with Dr. Meenakshi.
5. **2 placeholder testimonials** — Rekha Anand and Ananya Krishnan should be replaced with real reviews.

---

## 📄 Pages Still To Build

- Blog / Wellness Journal
- FAQ page

---

## 🔧 Design Notes

- **Footer logo** is a transparent RGBA PNG. Do NOT use mix-blend-mode or non-transparent versions.
- **Nav logo** (`logo.png`) has a transparent background — safe to use on any light background.
- **Social icon SVGs** use explicit `fill="rgba(...)"` not `fill="currentColor"` — the latter can break on some hosting environments.
- **WhatsApp tooltip** shows on every page reload (intentional, not session-based).
- **Event images** use `height: clamp(380px, 44vw, 520px)` with `object-fit: contain` to show full poster at any screen size.
- **Page hero OM** spins via `@keyframes heroOmSpin` in `main.css` at 120s/rotation using the `::after` pseudo-element. The legacy `.hero-om` div in each page's HTML is hidden (`display: none`) and kept only for backwards compatibility.
- **Favicon** — full set of 6 sizes included: `.ico`, 16px, 32px, 192px, 512px, and 180px apple-touch-icon.

---

*Built with ❤️ for Aarohana Yoga, Bengaluru.*
