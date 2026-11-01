# Kalika Manavgyan Secondary School

A responsive school website for Kalika Manavgyan Secondary School in Butwal, Nepal. Built with React, React Router and Vite, with the school's photographs and campus video stored locally in `public/`.

## Pages and features

- Home page with a campus introduction, video, photo gallery, academic pathways and recent notices
- Academics page with interactive level tabs
- Admissions inquiry form that prepares an email draft
- Notices and events with category filters, search, detail dialogs and sharing
- About, facilities and contact pages
- Responsive navigation, keyboard-accessible photo and notice dialogs, and a shared footer
- GitHub Pages deployment workflow

## Run locally

Use Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Publish with GitHub Pages

Push the project to a GitHub repository on the `main` branch. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the deployment source. The workflow at `.github/workflows/pages.yml` builds and publishes the site after each push to `main`; it also supports a manual run from the Actions tab.

The Vite base path is set automatically for project pages, and the included `404.html` keeps client-side routes working when a visitor refreshes a page.

## Local media

| File | Used for |
| --- | --- |
| `public/images/logo.jpg` | Site emblem and browser icon |
| `public/images/ForHome.jpg` | Home page campus image and video poster |
| `public/images/about.jpg` | About page banner |
| `public/images/principal.jpg` | Principal portrait |
| `public/images/academis.jpg` | Academics banner and classroom gallery |
| `public/images/admmission.jpg` | Admissions banner |
| `public/images/facilities.jpg` | Facilities banner and classroom event |
| `public/images/contact.jpg` | Contact banner and school gathering |
| `public/images/notice.webp`, `public/images/alsonotice.webp` | School gallery and event cards |
| `public/video/webvideo.mp4` | Home page campus video |

Keep contact details, admission status and notice dates current as school information changes. The forms open an email draft; they do not send or store submissions on a server.
