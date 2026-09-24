# Sushant Chaudhary — Personal Portfolio

A responsive personal portfolio website for **Sushant Chaudhary**, a BSc CSIT student and aspiring software developer.

## Included

- Responsive design for mobile, tablet and desktop
- Sticky navigation with mobile hamburger menu
- Dark/light theme with localStorage
- Typing animation
- Scroll progress indicator
- Reveal-on-scroll animations
- About, Skills, Education, Projects, Experience, Services, Certification and Contact sections
- Project filtering
- Project details modal
- GitHub links for the six public repositories currently shown on the portfolio
- Copy-email button
- Contact-form validation with demo success message
- Accessibility-focused labels and keyboard-friendly controls
- SEO metadata and Open Graph metadata
- User-provided profile photo already included
- Placeholder CV file, ready to replace when the final CV is provided
- Custom 404 page

## Run locally

### Option 1 — VS Code + Live Server
1. Extract the ZIP.
2. Open the `sushant-portfolio` folder in VS Code.
3. Install the **Live Server** extension if you do not already have it.
4. Right-click `index.html`.
5. Choose **Open with Live Server**.

### Option 2 — Python
If Python is installed:

```bash
cd sushant-portfolio
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Before publishing

### 1. Add the real CV
Replace:

`assets/CV.pdf`

with your final CV. Keep the same filename, or update the link in `index.html`.

### 2. Connect the contact form
The contact form is integrated with Formspree.

You can connect it to:
- Formspree
- EmailJS
- Your own backend/API

Do not put private API keys or secrets in frontend JavaScript.

### 3. Check social links
GitHub, Instagram and Facebook are already filled in. LinkedIn was not supplied, so no fake LinkedIn link was added.

### 4. Update projects
The project cards are generated in `js/script.js`. Add/edit entries in the `projects` array.

## Deploy

The project is static, so it can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## Project structure

```text
sushant-portfolio/
├── index.html
├── 404.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile.jpg
│   └── projects/
└── assets/
    └── CV.pdf
```

## Personal information currently included

- Name: Sushant Chaudhary
- Title: BSc CSIT Student / Aspiring Software Developer
- Email: sushantcdy734@gmail.com
- Phone: 9868101504
- Location: Kathmandu, Nepal
- GitHub: https://github.com/sushantcdy734
- Instagram: https://www.instagram.com/cdysushant/?hl=en
- Facebook: https://www.facebook.com/sushant.chaudhary.543792
- Education: BSc CSIT, Kathmandu College of Technology / Tribhuvan University, 2080–2084, ongoing, 6th semester
- Experience: No professional experience yet
- Services: Web Development, Software Development
- Certificate: HTML, CSS and Python — KCT College — 2080
