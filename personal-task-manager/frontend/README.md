# Personal Task Manager Frontend

This is the frontend application for the Personal Task Manager system, built with React, Vite, and Tailwind CSS.

## Features

- User authentication (login/register)
- Task management (create, read, update, delete)
- Task categories
- Task reminders
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
5. Update the `.env` file with your API URL

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- ESLint
