# Aarohana Yoga — Website

A clean, production-ready static website for **Aarohana Yoga**, founded by Dr. Meenakshi K S.  
Built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies, no build step.

---

## 📁 Project Structure

```
aarohana-yoga/
├── index.html          ← Home page
├── css/
│   └── main.css        ← Shared styles, brand tokens, nav, footer
├── js/
│   └── main.js         ← Shared JS: scroll effects, nav, reveal animations
├── images/
│   └── (place images here — hero, gallery, team photos etc.)
├── pages/
│   └── about.html      ← About / Founder page
└── README.md
```

---

## 🎨 Brand Colours

Derived from the Aarohana Yoga logo:

| Token | Value | Use |
|---|---|---|
| `--teal` | `#2E6B5E` | Primary brand (nav CTA, headings, buttons) |
| `--teal-mid` | `#4A8577` | Hover states, avatar backgrounds |
| `--gold` | `#B8935A` | Accent (section tags, underlines, badges) |
| `--gold-light` | `#D4AC72` | Footer text, hover highlights |
| `--cream` | `#F7F3EC` | Section backgrounds |
| `--warm-white` | `#FDFAF5` | Page background |
| `--charcoal` | `#2C2C2C` | Body text |

---

## 🚀 Deploying

### Option 1 — Netlify (Recommended, free)
1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Drag and drop the `aarohana-yoga/` folder
3. Done — live in ~30 seconds

### Option 2 — GitHub Pages (Free)
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch → `/root`
3. Site is live at `https://yourusername.github.io/aarohana-yoga`

### Option 3 — Vercel (Free)
1. Go to [vercel.com](https://vercel.com) → Import project → upload folder

---

## ✉️ Making the Contact Form Work

The form currently has a success animation but doesn't send emails.  
To make it functional, use **Formspree** (free, no backend needed):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form — you'll get a form endpoint URL like `https://formspree.io/f/xxxx`
3. In `index.html`, update the form submit button's click handler in `js/main.js` to POST to that URL

---

## 🖼️ Adding Real Photos

Replace placeholder visuals by:
1. Saving images to the `images/` folder
2. Updating the `src` attributes in the relevant HTML files

Key image slots:
- `index.html` hero: the `<img class="hero-photo">` tag (currently uses Wix CDN URL)
- `pages/about.html` founder section: replace the `.founder-img-frame` placeholder with an `<img>` tag
- Trainer photos: already pulling from Wix CDN — download and host locally for reliability

---

## 📄 Pages Built

| File | Description |
|---|---|
| `index.html` | Home — Hero, About snippet, Services, Why Us, Testimonials, Schedule, Contact |
| `pages/about.html` | Full About — Founder story, Philosophy, Mission/Vision, Trainers |

## 📄 Pages To Add Next

| Page | Notes |
|---|---|
| `pages/services.html` | Expanded service detail pages |
| `pages/gallery.html` | Filterable image gallery |
| `pages/events.html` | Upcoming events with countdowns |
| `pages/blog/` | Blog/Wellness Journal |

---

*Built with ❤️ for Aarohana Yoga, Bengaluru.*
