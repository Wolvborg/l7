# FootballSphere

A web application for football (soccer) statistics, matches, teams, players, and stadiums. Built with Vue 3, Express, and TypeScript in a monorepo structure.

## 🏗️ Project Structure

The project is organized as a monorepo using pnpm workspaces and Turborepo:

```
packages/
├── web/          # Vue 3 frontend application
├── api/          # Express backend API
└── types/        # Shared TypeScript types
```

## 🚀 Features

- **Matches**: View live scores, match schedules, and detailed match information
- **Teams**: Explore team statistics, performance metrics, and team details
- **Players**: Browse player profiles with statistics and performance data
- **Stadiums**: Discover stadium information with images and capacity details

## 🛠️ Tech Stack

### Frontend (packages/web)

- Vue 3 with Composition API
- Vue Router for navigation
- Tailwind CSS for styling
- TypeScript for type safety
- Vite for development and building

### Backend (packages/api)

- Express.js for the API server
- TypeScript for type safety
- CORS enabled for cross-origin requests
- ESBuild for fast builds

### Shared

- TypeScript types shared between frontend and backend
- Monorepo management with pnpm and Turborepo

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Wolvborg/l7
cd l7
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development servers:

```bash
pnpm dev
```

This will start both the frontend (port 3000) and backend servers(port 4000) in parallel.

### Building for Production

```bash
pnpm build
```

### Available Scripts

- `pnpm dev`: Start development servers
- `pnpm build`: Build all packages
- `pnpm lint`: Run linting across all packages
