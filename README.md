## Introduction

Welcome to my new personal website in Astro.

## 🚀 Project Structure

At the moment is structured in this way:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Link.astro
│   │   └── Social.astro
│   ├── icons/
│   │   ├── socials/
│   │   └── x.svg
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .gitignore
├── astro.config.mjs
├── package.json
├── pnpm-lock.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
