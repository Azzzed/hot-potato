# 🥔 Hot Potato Haus & Cafe — Official Website

A premium, cinematic Next.js 14 website for Hot Potato Haus & Cafe in Downtown Los Angeles.

## Tech Stack

- **Next.js 14** (App Router)
- **TailwindCSS** — custom warm brand palette
- **Framer Motion** — smooth animations
- **Lucide React** — icons
- **Google Fonts** — Playfair Display, Cormorant Garamond, DM Sans

## Getting Started

```bash
# Install dependencies
npm install

# Install peer dependency
npm install react-intersection-observer

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
hot-potato-haus/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata + JSON-LD
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles + Tailwind
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── Navbar.tsx          # Sticky navbar + mobile menu
│   ├── Hero.tsx            # Cinematic hero section
│   ├── About.tsx           # Brand story section
│   ├── Menu.tsx            # Interactive menu with category filters
│   ├── Gallery.tsx         # Masonry photo gallery
│   ├── Reviews.tsx         # Google Reviews style testimonials
│   ├── Delivery.tsx        # DoorDash / Uber Eats / Postmates
│   ├── InstagramSection.tsx # Instagram grid preview
│   ├── Contact.tsx         # Reservation form + WhatsApp
│   ├── Location.tsx        # Map + hours + address
│   ├── Footer.tsx          # Full footer with SEO text
│   └── WhatsAppButton.tsx  # Floating WhatsApp CTA
├── public/
│   └── robots.txt          # SEO robots file
├── tailwind.config.js      # Custom brand colors + typography
├── next.config.js
└── package.json
```

## SEO Features

- ✅ Metadata API (title, description, keywords)
- ✅ Open Graph + Twitter Cards
- ✅ JSON-LD Restaurant + LocalBusiness schema
- ✅ Geo metadata for local SEO
- ✅ Sitemap.xml (dynamic)
- ✅ Robots.txt
- ✅ Semantic HTML (H1, H2, H3)
- ✅ aria-labels for accessibility
- ✅ Mobile-first responsive design

## Brand Colors

| Name | Hex |
|------|-----|
| Cream | `#F5ECD7` |
| Cream Dark | `#EDD9B4` |
| Brown 900 | `#3D1C02` |
| Rust | `#C4572A` |
| Rust Dark | `#8B1A1A` |
| Gold | `#D4A017` |

## Deployment

Deploy instantly to Vercel:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Customization

1. **Images**: Replace emoji placeholders with real food photography in `/public/images/`
2. **Menu prices**: Update `components/Menu.tsx`
3. **Hours**: Update `components/Location.tsx` and `components/Footer.tsx`
4. **Google Maps**: Update the iframe `src` in `components/Location.tsx` with your actual embed URL
5. **SEO**: Update `app/layout.tsx` with your domain

---

Built with ❤️ for Hot Potato Haus & Cafe · 231 E 12th St · Los Angeles, CA 90015
