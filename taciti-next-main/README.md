# Taciti Consulting - Next.js Static Site

Fully static Next.js website for Taciti Consulting (taciti.com), migrated from WordPress + Next.js hybrid to a fully static Next.js setup.

## Getting Started

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm run start
```

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.js` | Home page |
| `/about-us` | `src/app/about-us/page.js` | About Us page |

## Project Structure

```
src/
  app/
    layout.js           # Root layout with Header + Footer
    globals.css         # Global styles (ported from coinage project)
    page.js             # Home page
    about-us/
      page.js           # About Us page (fully static)
  components/
    Header.js           # Sticky navigation header with dropdowns
    Footer.js           # Footer with links and social icons
public/
  images/               # All Taciti image assets
  fonts/                # Futura and Roboto font files
```

## About Us Page

The About Us page (`/about-us`) is fully static and includes:

1. **Hero section** with the About Us banner image
2. **Know Us section** — Company background and description from the PDF source
3. **Vision / Mission / Values** cards
4. **Stats counter** section (25+ years, 100+ projects, etc.)
5. **Team grid** — Clickable team cards with popup modal (static data, replace with real team data as needed)
6. **Partners & Certifications** section with SAP Silver Partner and SecurityBridge logos

### Updating Team Members

Team data is defined as a static array in `src/app/about-us/page.js`:

```js
const teamData = [
  {
    id: 1,
    title: "Team Member Name",
    excerpt: "<p>Job Title</p>",
    content: "<p>Full bio paragraph...</p>",
    featuredImage: "/images/your-photo.jpg",
  },
  // ... more members
];
```

Replace `featuredImage` paths with actual team member photos placed in `/public/images/`.
