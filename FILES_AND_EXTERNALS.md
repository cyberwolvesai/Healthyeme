# The Cinnamon Kitchen Replica – Files and External Includes

This document lists all project files and external resources used to replicate the Cinnamon Kitchen e-commerce site.

---

## Project structure

```
c:\healtyeme\
├── index.html              # Homepage (hero, Dive In, brand story, featured products, testimonials)
├── shop-all.html           # Full product grid with filters and sort
├── best-sellers.html       # Best selling products
├── fresh-cakes-bakes.html  # Shop By Type: Fresh Cakes & Bakes
├── cookies-baked-goods.html
├── nut-butters-spreads.html
├── snacks-bites.html
├── granola-breakfast.html
├── pantry-staples.html
├── diet-vegan.html         # By Diet: Vegan
├── diet-keto.html
├── diet-loved-by-children.html
├── diet-lactose-free.html
├── valentine.html          # TCK's Valentine Edit
├── winter-menu.html        # Winter Menu collection
├── about.html              # About Us – brand story
├── login.html              # Sign in
├── signup.html             # Create account
├── cart.html               # Full cart page (edit qty, remove, total)
├── checkout.html           # Checkout (shipping, payment, order summary)
├── search.html             # Search form
├── contact.html            # Contact form
├── terms.html              # Terms and Conditions
├── privacy.html            # Privacy Policy
├── components/
│   ├── header.html         # Reusable header (promo bar + nav + cart)
│   └── footer.html         # Reusable footer (newsletter, links, payment icons)
├── data/
│   └── products.js         # TCK_PRODUCTS, TCK_CATEGORIES, TCK_DIVE_IN, TCK_TESTIMONIALS, TCK_STORY_SECTIONS
├── static/
│   ├── tck.css             # Global styles (header, footer, hero, product cards, cart, forms, responsive)
│   ├── tck.js              # Cart (localStorage), mobile menu, story tabs, add-to-cart, cart drawer
│   ├── collection.js       # Collection/diet page: filter products and render grid
│   ├── style.css            # (legacy – original Healtyeme styles)
│   └── app.js              # (legacy – empty)
├── templates/
│   └── collection-template.html  # Notes for collection page structure
├── assets/
│   └── images/             # Your existing images (optional; site uses placeholder URLs)
└── FILES_AND_EXTERNALS.md  # This file
```

---

## External includes (CDN / third-party)

| Resource | Purpose |
|----------|--------|
| **Google Fonts** | Typography |
| `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600&display=swap` | Inter (body), Playfair Display (headings) |
| **Placeholder images** | Dummy product/category/hero images |
| `https://picsum.photos/seed/.../W/H` | Product and category images (e.g. seed/tck1/600/600) |
| `https://via.placeholder.com/...` | Logo and payment icons in footer |

No npm or build step is required. Open `index.html` in a browser (or use a local server) to view the site.

---

## Design tokens (in tck.css)

- **Colors:** `--tck-cream`, `--tck-brown`, `--tck-brown-medium`, `--tck-btn-bg`, `--tck-border`, `--tck-star`, etc.
- **Typography:** Inter (body), Playfair Display (headings).
- **Components:** Promo bar, sticky header, dropdowns, hero slider, Dive In cards, product grid, cart drawer, footer.

---

## Data (data/products.js)

- **TCK_PRODUCTS:** 35 products with id, name, weight, tagline, price, rating, ship, category, diet, img.
- **TCK_CATEGORIES:** 6 shop-by-type categories.
- **TCK_DIVE_IN:** 4 “Dive In” homepage cards (Granola, Cookies, Fresh Bakes, Spreads).
- **TCK_TESTIMONIALS:** 4 testimonials (name, role, text, product, img).
- **TCK_STORY_SECTIONS:** 4 brand story sections (Where It Began, Born to Bake Differently, What We Believe, You Make Us Real).
- **CATEGORY_MAP / DIET_MAP:** Used in collection.js to filter by category slug or diet.

All product and testimonial images use `picsum.photos` with a seed for stable dummy images. Replace with your own image URLs when ready.

---

## Optional: replace logo

Replace the placeholder logo in the header with your TCK logo:

- In each HTML file, change the header logo `<img src="https://via.placeholder.com/144x44/2d2a26/ffffff?text=TCK" ...>` to point to your logo file (e.g. `assets/images/logo.svg`).

---

## Responsive breakpoints (tck.css)

- **Desktop:** default layout (e.g. 4-column product grid, side filters).
- **1024px:** 3-column grid, 2-column Dive In, footer and story stack.
- **768px:** 2-column grid, mobile nav visible, header nav hidden, single-column footer.
- **480px:** Single-column where needed; cart item layout stacks.

---

## Accessibility and SEO

- Semantic HTML (`header`, `nav`, `main`, `footer`, `article` for products).
- `aria-label` on menu toggle, cart, search, dropdowns.
- Page `<title>` and meta description on key pages (index, shop-all, about).
- Alt text on product images (product name).

To match the original site more closely, add Open Graph and Twitter meta tags where needed.
