# Zain ul Abadin – Portfolio

A clean, animated React portfolio website built with React 18 and CSS Modules.

## Project Structure

```
zain-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.module.css
│   │   ├── Hero.js   / Hero.module.css
│   │   ├── About.js  / About.module.css
│   │   ├── Skills.js / Skills.module.css
│   │   ├── Experience.js / Experience.module.css
│   │   ├── Projects.js   / Projects.module.css
│   │   ├── Contact.js    / Contact.module.css
│   │   └── Footer.js     / Footer.module.css
│   ├── hooks/
│   │   └── useReveal.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at http://localhost:3000

### 3. Build for production
```bash
npm run build
```

## Deploy to Netlify (Free)
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag & drop the `build/` folder

## Deploy to Vercel (Free)
```bash
npm install -g vercel
vercel
```

## Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to package.json:
```json
"homepage": "https://yourusername.github.io/zain-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run: `npm run deploy`

## Customization
- Update contact info in `src/components/About.js` and `src/components/Contact.js`
- Add/edit projects in `src/components/Projects.js`
- Add/edit skills in `src/components/Skills.js`
- Change colors via CSS variables in `src/index.css`
