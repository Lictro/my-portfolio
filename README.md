# luisalvarez.dev

My personal website is a modern, app-like portfolio built with `Next.js`, `Tailwind CSS`, `Supabase`, `Firebase`, and deployed on `Vercel` to showcase my projects, experiments, and user interactions.\

It is designed as a bento grid layout, inspired by the work of Gianmarco Cavallo (Ladvace), focusing on modular sections that highlight content in a structured and visually balanced way.

It’s created to feel more like a small product than a static site, with a focus on performance, clean UI, and smooth interactions.

The site includes interactive features like a custom guestbook, where users can leave messages. On the backend, I’ve implemented API routes, basic validation, and rate limiting to prevent spam and abuse.

Overall, it’s a space where I build, experiment, and continuously improve both the technical side and the user experience. 

## Overview

- `/` — Home page.
- `/writing` — Writing page.
- `/workspace` — Workspace page.
- `/api` — API routes.

## Bento Cards

### MeCard

The main introduction card of the portfolio. It represents the personal identity of the site, featuring a short intro, name, and key positioning. It’s designed to be the visual and contextual anchor of the entire grid.

### AboutCard

A deeper look into who I am, what I do, and what I care about as a developer. This card expands on background, mindset, and approach to building software and products.

### TimeCard

A utility card that displays real-time information such as current time or timezone context. It adds a dynamic and live element to the otherwise static grid layout.

### ProjectsCard

A compact overview of selected projects. It highlights key work, linking to deeper case studies or external repositories, acting as a gateway into my development work.

### SpotifyCard

A personal and expressive card that reflects what I’m currently listening to. It adds personality and real-time cultural context to the portfolio.

### StatusCard

A small status indicator card that shows current availability or activity. It helps communicate whether I’m active, available, or focused on other work.

### GuestbookCard

An interactive card where visitors can leave messages. It represents the social layer of the portfolio and demonstrates backend interaction and user-generated content.

### FunCard

A playful or experimental card used for small interactions, easter eggs, or creative UI ideas. It breaks the seriousness of the layout and adds personality.

### BuiltWithCard

A technical summary card showing how the site itself was built — frameworks, libraries, and infrastructure powering the portfolio.

## Running Locally

```bash
$ git clone https://github.com/Lictro/my-portfolio.git
$ cd my-portfolio
$ npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/Lictro/my-portfolio/blob/main/.env.example).

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [DiceBear](https://www.dicebear.com)
- [Firebase](https://firebase.google.com)
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)

## License

1. Feel free to take inspiration from this code.
2. Avoid directly copying it, please.
3. Crediting the author is appreciated.