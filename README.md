# Rina Jean Mislang - Portfolio

A fullstack portfolio website built with React (frontend) and PHP/MySQL (backend).

## Tech Stack

**Frontend:**
- React
- Vite
- Tailwind CSS

**Backend:**
- PHP
- MySQL
- PDO

## Project Structure

```
my_portfolio/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── App.jsx    # Main portfolio component
│   │   ├── main.jsx   # Entry point
│   │   └── index.css  # Global styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/           # PHP backend API
│   ├── config.php     # Database configuration
│   ├── api.php        # API endpoints
│   └── database.sql   # Database schema
└── README.md
```

## Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173/`

### Backend Setup

1. Create a MySQL database and import `backend/database.sql`
2. Configure your database credentials in `backend/config.php`
3. Serve the backend folder with a PHP server (e.g., Apache, Nginx, or PHP's built-in server)

### API Endpoints

- `GET /api.php` - Get all portfolio data
- `GET /api.php?action=about` - Get about information
- `GET /api.php?action=techstack` - Get tech stack
- `GET /api.php?action=projects` - Get projects
- `GET /api.php?action=certifications` - Get certifications

## Features

- **About Section** - Personal introduction
- **Tech Stack** - Skills and technologies
- **Projects** - Mobile and web projects showcase
- **Certifications** - Certifications (coming soon)
- Responsive design with Tailwind CSS

## Portfolio Content

- **Mobile Apps:** LERA, hilkvisual
- **Web Apps:** clarem, cames and co, dainty m'lang cafe
- **Tech Stack:** React, React Native, JavaScript, Tailwind CSS, Bootstrap, Node.js, Laravel, PHP, MySQL, Supabase, Figma, Canva, WordPress, and more!
