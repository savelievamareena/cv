# Marina Savelieva — Personal CV / Portfolio

A personal CV and portfolio website built with **Next.js (App Router)** and **Tailwind CSS**. It presents a short bio, language proficiency, a browsable list of projects, skills, useful links, a contact form, and a downloadable PDF résumé. The site is fully responsive across desktop and mobile resolutions.

## Tech Stack

| Area | Technology |
|------|-----------|
| Framework | [Next.js 13.5](https://nextjs.org/) (App Router, React Server Components) |
| UI library | [React 18](https://react.dev/) |
| Styling | [Tailwind CSS 3.3](https://tailwindcss.com/) + PostCSS / Autoprefixer |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts | `next/font` (Google Font — Rubik) |
| Data | Static JSON (`_data/db.json`), imported directly at build time |
| Linting | ESLint (`eslint-config-next`) |
| Language | JavaScript (JSX) |

No backend or API server is required — project data is a static JSON file imported straight into the components.

## Project Structure

```
cv-personal/
├── app/                          # Next.js App Router
│   ├── layout.jsx                # Root layout (header, navigation, download button)
│   ├── page.jsx                  # Home page ("/")
│   ├── globals.css               # Global styles + Tailwind directives + custom classes
│   ├── not-found.jsx             # 404 page
│   ├── favicon.ico
│   │
│   ├── components/               # Shared UI components
│   │   ├── Navigation.jsx        # Top navigation menu
│   │   ├── Hello.jsx             # Home intro (bio + languages columns)
│   │   └── DownloadButton.jsx    # Floating "Download CV" (PDF) button
│   │
│   ├── projects/                 # "/projects"
│   │   ├── page.jsx              # Projects page (server component)
│   │   ├── ProjectsList.jsx      # Client component — carousel to flip through projects
│   │   └── [id]/
│   │       └── page.jsx          # Individual project route (SSG per project id)
│   │
│   ├── skills/                   # "/skills"
│   │   ├── page.jsx
│   │   └── SkillsList.jsx
│   │
│   ├── contact/                  # "/contact"
│   │   ├── page.jsx
│   │   └── ContactForm.jsx       # Client component — contact form
│   │
│   └── links/                    # "/links"
│       └── page.jsx
│
├── _data/
│   └── db.json                   # Site data — projects (title, period, description, technologies)
│
├── public/                       # Static assets
│   ├── avatar.jpg
│   └── maryna-savelyeva-cv-actual.pdf
│
├── next.config.js                # Next.js config (static asset caching headers)
├── tailwind.config.js            # Tailwind theme (custom colors + widths)
├── postcss.config.js
├── jsconfig.json                 # Path alias: "@/*" → project root
└── package.json
```

## Data

All content shown on the site lives in [`_data/db.json`](./_data/db.json). Each project has the following shape:

```json
{
  "id": 1,
  "title": "Project title",
  "period": "2024–2025",
  "description": "What was built and the key features.",
  "technologies": ["TypeScript", "React", "..."]
}
```

To add, edit, or reorder projects, change this file only — the UI (projects carousel and per-project routes) is generated from it automatically.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Install & run

```bash
# install dependencies
npm install

# start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint |

## Deployment

The app is a standard Next.js project and can be deployed to any platform that supports Next.js (e.g. [Vercel](https://vercel.com/)). Since the data is static, `npm run build` produces the full site without any external service or database.

## Notes

- `swr` is listed in `dependencies` but is no longer used (data is imported directly); it can be safely removed.
- The contact form (`app/contact/ContactForm.jsx`) posts to a local endpoint and requires a backend to actually deliver messages — on a static deployment it needs to be wired to an email service (e.g. Formspree) or replaced with a `mailto:` link.
