# Vibe-Code-Assignment

A combined repository demonstrating **modern AI-assisted development** and **frontend payment simulation** — built using both **HTML/CSS/JavaScript (UPI Payment Demo)** and **React + TypeScript (Vibecoding Showcase Hub)**.

---

## 1️⃣  UPI Payment Demo — Frontend Web App

### Overview
This project is a **UPI Payment Demo Web App** built using **HTML**, **CSS**, and **JavaScript**.  
It allows users to simulate a UPI payment request by entering payment details such as **Payee UPI ID**, **Payee Name**, and **Transaction Note**. The app then generates a **UPI payment URI** that can be used to open and process payments in any UPI-compatible mobile application.

This project demonstrates basic web development, form handling, and UPI integration concepts for learning and experimentation purposes.

---

###  Project Structure
```
assigment-a/
│
├── index.html # Main UI for payment demo
├── style.css # Styling for the interface
├── script.js # Logic for generating UPI payment links
└── .git/ # Git version control data
```
---

### Features
✅ Simple and interactive UI for UPI payment simulation  
✅ Automatically generates unique transaction references  
✅ Live form validation and feedback messages  
✅ Responsive and clean card-based layout  
✅ Built with pure HTML, CSS, and vanilla JS (no frameworks)

---

###  How It Works
1. User enters:
   - Payee UPI ID (e.g., `merchant@bank`)  
   - Payee Name  
   - Transaction Note  
   - Amount (default ₹1.00)
2. On clicking **“Pay via UPI”**, the app dynamically creates a UPI deep link in this format:
   ```bash
   upi://pay?pa=<VPA>&pn=<PayeeName>&am=<Amount>&tn=<Note>&tr=<RandomRef>
   ```

3. The app then displays a status message confirming that the payment link is ready.

> 💡 Note: This app does **not actually process payments** — it’s a frontend demonstration meant for UI/UX and logic practice.

---

### Run the Project
1. **Clone this repository**
```bash
git clone https://github.com/<your-username>/assigment-a.git

```
2.Navigate to the folder
`
cd assigment-a
`

3.Open the app in your browser
`
start index.html     # on Windows
open index.html      # on macOS
xdg-open index.html  # on Linux
`
Technologies Used
 - HTML5 — structure and layout
 - CSS3 — styling and responsiveness
 - JavaScript (ES6) — logic and UPI link generation

Learning Takeaways
 - Working with UPI URI schemes
 - DOM manipulation and dynamic content updates
 - Basic form handling and input validation
 - inimalistic design with HTML/CSS
 - Git-based project setup for version control

## 2️⃣ Vibecoding Showcase Hub

 Overview

A production-ready web application demonstrating AI-assisted (vibecoding) full-stack development.
Built entirely through conversational AI, this project showcases modern design systems, React component architecture, and beautiful UI/UX.

🔗 Live Demo: https://joy-code-gem.lovable.app/

 Highlights
  - Built entirely through AI-driven development
  - React 18 + TypeScript + Tailwind CSS + Vite
  - Responsive, dark-themed UI with animations and glassmorphism
  - Clean, modular component architecture
  - SEO-optimized and production-ready

 Tech Stack
  - Frontend: React, TypeScript, Tailwind CSS
  - Build Tool: Vite
  - Routing: React Router
  - State Management: TanStack Query
  - UI Components: Radix UI + shadcn/ui
  - Icons: Lucide React

📂 Project Structure
`
assignment-b/
└── src/
    ├── components/
    ├── pages/
    ├── assets/
    ├── index.css
    └── App.tsx
    `

 Features
  - Modern dark UI with gradients and animations
  - Hero section, feature cards, demo showcases, and CTAs
  - Optimized for accessibility, performance, and SEO
  - Scalable and maintainable React architecture

Run the Project
 Clone repository and install dependencies
```
git clone <YOUR_GIT_URL>
cd vibecoding-showcase
npm install
```

 Start development server
```
npm run dev
```

 Key Learning Outcomes
  - Rapid prototyping through AI-assisted vibecoding
  - Reusable design tokens and UI components
  - Modern web best practices (TypeScript, Tailwind, SEO)
  - Production-ready architecture with optimized builds

 Tools & Technologies Summary
|Category|	Tools|
|------------------|
|Frontend	|React, TypeScript, HTML5, CSS3, JS (ES6)|
|Styling	|Tailwind CSS, Custom CSS|
|Build Tools	|Vite|
|State & UI	|TanStack Query, Radix UI, shadcn/ui|
|Version Control|	Git, GitHub|
|Hosting	Lovable / Local|
|--------------------------|

 Repository Structure
 `
root/
├── assigment-a/              # UPI payment simulation frontend app
└── vibecoding-showcase/      # Full-stack AI-built web app
`

----
