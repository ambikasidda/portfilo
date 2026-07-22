# portfilo
# Sidda Ambika · AI & ML Engineer — Portfolio

A responsive personal portfolio built with React and Vite, showcasing my work as an AI & Machine Learning Engineer and Full-Stack Developer — including projects, skills, certifications, and education, with a light/dark theme toggle.



---

## 👋 About

I build AI-driven products end-to-end — from training and deploying machine learning models to shipping the full-stack web apps that put them in front of real users. I'm a B.Tech CSE (AI & ML) student with a 9.1/10 CGPA, AWS Certified Cloud Practitioner, and hold credentials from IBM, AICTE, and Skill India in AI/ML and full-stack development.

**Focus areas:** AI/ML · Web Development · Robotics
**Location:** Nandyal, Andhra Pradesh
**Availability:** Open to internships & full-time roles

## ✨ Features

- **Hero section** with a quick intro and call-to-action buttons
- **About** section with background, focus areas, and availability
- **Skills** — core technical tags plus grouped skill categories (Programming, Web Dev, AI/ML Libraries, Soft Skills)
- **Education timeline** — B.Tech, XII, and SSC history with grades
- **Featured Projects** — cards with category, description, tech tags, and live links
- **Certifications grid** — AICTE, AWS, IBM, Skill India, and more
- **Contact section** with direct email, phone, LinkedIn, and GitHub links
- **Light/Dark mode toggle**, powered by a single theme state in `App.jsx` and CSS custom properties

## 🚀 Featured Projects

| Project | Category | Stack |
|---|---|---|
| [AI-Based Disease Prediction System](https://github.com/Keerthi778/AI-Based-disease-prediction-System) | Machine Learning | Python, Flask, Scikit-learn, Pandas, NumPy, Bootstrap |
| [Expense Tracker](https://github.com/Keerthi778/Expense-Tracker-App) | Web Development | HTML, CSS, JavaScript, Chart.js, LocalStorage API |
| AI Adoption Dashboard — Excel Macros | Data Analytics | Microsoft Excel, VBA, Power BI |
| [Personal Portfolio — Lovable](https://siddakeerthi-portfolio.lovable.app/) | AI / Portfolio | Lovable, React, Responsive Design |

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — build tool and dev server
- **JavaScript (ES Modules)**
- **CSS custom properties** — for the light/dark theme system

## 📂 Project Structure

```
protofilo/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx           # App entry point
    ├── App.jsx            # Root component, theme state
    ├── App.css            # Global styles + theme tokens
    ├── index.css          # Base resets
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Education.jsx
        ├── Projects.jsx
        ├── Certifications.jsx
        └── Contact.jsx
```

## 🏁 Getting Started

Clone the repository and run it locally:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Available Scripts

| Command           | Description                          |
|--------------------|---------------------------------------|
| `npm run dev`      | Starts the local development server   |
| `npm run build`    | Builds the app for production         |
| `npm run preview`  | Previews the production build locally |

## 📦 Deployment

Build the production files with:

```bash
npm run build
```

This generates a `dist/` folder, ready to deploy on **Vercel**, **Netlify**, or **GitHub Pages**.

