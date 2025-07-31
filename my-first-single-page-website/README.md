# Multi-Page Interactive Website (SPA)

This is a basic **Single Page Application (SPA)** built with React. It displays multiple page-like sections without reloading the browser. The website demonstrates simple interactive features such as counters, event handling, and arithmetic operations, ideal for beginners exploring React fundamentals.

## 🌐 Live Website

🔗 [View on Netlify](https://basic-spa-website.netlify.app/)

## 📄 Features

- 🏠 **Home / About / Contact** – Static views that simulate multi-page navigation without actual page reload.
- 🎉 **EventDemo** – Demonstrates basic event handling in React.
- 🔢 **Counter** – An interactive counter that:
  - Increases or decreases a value.
  - Shows a warning if the value exceeds a limit.
- ➕ **Sum** – Takes two numbers as input and displays their sum.

## 🛠️ Built With

- **React**
- **Vite** (for faster development/build)
- **HTML + CSS**
```
## 📁 Folder Structure

basic-website/
├── public/
├── src/
│ ├── components/
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


bash
Copy
Edit

## 🚀 Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/siddhraj1412/basic-website.git
   cd basic-website
Install dependencies:

bash
Copy
Edit
npm install
Start the dev server:

bash
Copy
Edit
npm run dev
Open your browser and go to:
http://localhost:5173

🌍 Deployment
This project is deployed on Netlify. Any changes pushed to the main branch will automatically update the live site.

📦 What to Exclude from GitHub
Make sure not to upload:

node_modules/ (already ignored in .gitignore)

.env (if you ever use it)

dist/ (Netlify will build this automatically)

🙌 Acknowledgements

Developed as a learning project.
