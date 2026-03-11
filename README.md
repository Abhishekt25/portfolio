# 🚀 Abhishek Tiwari — React Portfolio

Modern, fully responsive developer portfolio built with **React 18 + TypeScript + Tailwind CSS + Framer Motion**.

---

## ⚡ Setup (3 commands)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173)

---



## ✏️ Customization

**All your content lives in one file:**

```
src/data/portfolio.ts
```

Edit `personalInfo`, `projects`, `skills`, `experience`, `services` — everything updates automatically.

### Add your profile photo

In `src/sections/Hero.tsx`, replace the placeholder div:

```tsx
// Find this:
<div className="w-full h-full bg-gradient-to-br from-brand-900/80 ...">
  <span>AT</span>
</div>

// Replace with:
<img src="/avatar.jpg" alt="Abhishek Tiwari" className="w-full h-full object-cover" />
```

Then put `avatar.jpg` in the `/public` folder.

### Connect Contact Form

In `src/sections/Contact.tsx`, replace the `setTimeout` mock with your real backend:

```ts
// Formspree example:
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})

// EmailJS example:
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```



## 🚀 Deploy

**Vercel** (recommended — free):
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag /dist folder to netlify.com
```

**GitHub Pages:**
```bash
npm install -D gh-pages
npm run build && npx gh-pages -d dist
```

---

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** v3
- **Framer Motion** v11
- **Lucide React** (icons)
- **Vite** (build tool)
