# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Designed to showcase projects, experience, and skills with a Google-inspired aesthetic.

![Portfolio Screenshot](https://picsum.photos/seed/portfolio-screenshot/1200/600)
*(Note: Replace this with a screenshot of your actual portfolio)*

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)

## Features

- **Modern & Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Dark/Light Mode**: User-selectable theme that persists in local storage.
- **Smooth Scrolling**: Seamless navigation between sections.
- **Interactive UI**: Engaging elements like project tag filtering and an infinite skill scroller.
- **Component-Based Architecture**: Built with reusable React components for easy maintenance.
- **Key Sections**:
  - **Hero**: A compelling introduction with a call-to-action.
  - **Experience**: A timeline of your professional journey.
  - **Projects**: A filterable gallery of your work with links to live demos and source code.
  - **Skills**: An animated scroller showcasing your technical skills.
- **SEO Friendly**: Semantic HTML and clear structure.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (`useState`, `useEffect`)

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-portfolio-repo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server, run:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the application in your browser. The page will auto-reload when you make changes.

### Building for Production

To create a production-ready build of the application, run:
```bash
npm run build
```
This command will generate a `dist` folder with optimized static assets that you can deploy to any web hosting service.

## Project Structure

The codebase is organized to be modular and easy to navigate.

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components (Header, Footer, etc.)
│   ├── constants.ts     # Centralized site data (profile, projects, experience)
│   ├── types.ts         # TypeScript type definitions
│   ├── App.tsx          # Main application component layout
│   ├── index.css        # Global styles entry point
│   ├── index.tsx        # React application entry point
│   └── ...
├── .gitignore
├── index.html           # Main HTML template
├── package.json
├── README.md            # This file
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

This portfolio is designed to be easily customized with your own information.

1.  **Update Personal Information**:
    Open `src/constants.ts` and modify the `PROFILE_DATA` object with your name, title, summary, email, and social media links.

2.  **Add Your Projects**:
    In the same `src/constants.ts` file, update the `PROJECTS` array. Each project is an object with a title, description, image URL, tags, and optional links for a live demo and source code.

3.  **Update Your Experience**:
    Modify the `EXPERIENCES` array in `src/constants.ts`. Each experience object contains details about your role, company, duration, and key responsibilities.

4.  **List Your Skills**:
    Update the `SKILL_CATEGORIES` array to reflect your technical skills. The skills are automatically populated into the animated scroller.

5.  **Change Images**:
    - **Profile Picture**: Replace the URL in the `Hero.tsx` component with a link to your own photo.
    - **Project Images**: Update the `imageUrl` property for each project in the `PROJECTS` array. You can use a service like [Picsum Photos](https://picsum.photos/) for placeholders or upload your own images.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
