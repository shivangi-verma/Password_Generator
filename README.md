# [Password Generator](https://passswordss.netlify.app/)

**Live demo:** https://passswordss.netlify.app/

[![App Demo](./public/Passwords_Generator_GIF.gif)](https://passswordss.netlify.app/)

---

## What is this  
A tiny, aesthetic password generator built in React. Generates secure random passwords with optional numbers and special characters. Includes a smooth scrambling animation (GSAP ScrambleText) and a friendly copy button.

> TL;DR: click, copy, flex.

## Features
- Crypto-safe random generation (`crypto.getRandomValues`)
- Toggle numbers + special characters
- Adjustable password length
- GSAP scramble animation when regenerating passwords
- Copy-to-clipboard with visual feedback
- Clean, responsive UI

## Tech Stack
- **React** (Hooks)
- **GSAP** + ScrambleTextPlugin  
- **Radix UI** — Checkbox  
- **Phosphor Icons**
- **Tailwind CSS**

## Key Files
- `src/components/NewPassGen.jsx` — main generator logic & animations  
- `src/components/LengthSelector.jsx` — password length UI  
- `src/components/Button.jsx` — reusable button  
- `src/assets/*` — icons  

## Install & Run

```bash
# clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# install deps
npm install

# run dev server
npm start
