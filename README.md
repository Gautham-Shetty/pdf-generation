# Assessment Management System

# Assessment Management System Frontend

This is the frontend for the Assessment Management System. It allows users to sign up, log in, view assessment sessions, and generate PDF reports.

## Features

- User Signup & Login
- View assessment sessions and details
- Generate and download PDF reports
- Responsive UI

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
   The app runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/components` - Reusable UI components
- `src/pages` - Application pages (Login, Signup, Dashboard, etc.)
- `src` - Main app entry point

## Requirements

- Node.js
- npm

## License

MIT





# Assessment Management System Backend

This backend provides user authentication and PDF report generation for assessment sessions.

## Features

- User Signup & Login (JWT-based authentication)
- Generate PDF reports for assessment sessions
- In-memory user store (no database required)
- Configurable assessment templates ([config/assessments.json](backend/config/assessments.json))
- Sample data ([data.js](backend/data.js))

## Endpoints

### POST `/signup`
Register a new user.
- Body: `{ "email": "...", "password": "..." }`

### POST `/login`
Authenticate a user and receive a JWT token.
- Body: `{ "email": "...", "password": "..." }`
- Response: `{ "token": "..." }`

### POST `/generate-report`
Generate a PDF report for a session (requires JWT token).
- Headers: `Authorization: Bearer <token>`
- Body: `{ "session_id": "session_001" }`
- Response: `{ "status": "PDF Generated", "filePath": "..." }`

## Usage

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm start
   ```
   Server runs at [http://localhost:8080](http://localhost:8080).

## Project Structure

- `server.js` - Main Express server
- `data.js` - Sample assessment session data
- `config/assessments.json` - Assessment template configuration
- `utils/templateBuilder.js` - HTML report builder
- `utils/pdfGenerator.js` - PDF generation using Puppeteer
- `reports/` - Generated PDF files

## Requirements

- Node.js
- npm

## License

MIT















