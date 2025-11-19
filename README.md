# Promos
A minimal MERN (MongoDB, Express, React, Node) starter project for a simple "Promoter <-> Client" connection platform.

Folders:
- backend: Express API with authentication (JWT), user roles (promoter/client), and promo CRUD.
- frontend: React single-page app that talks to backend.

This is a minimal, educational starter. You need to:
1. Install dependencies for backend and frontend.
2. Provide a running MongoDB (local or Atlas).
3. Set environment variables in backend/.env.

See quick-start below.

## Quick start (backend)
```bash
cd backend
npm install
# create .env based on .env.example
node server.js
```

## Quick start (frontend)
```bash
cd frontend
npm install
npm start
```

