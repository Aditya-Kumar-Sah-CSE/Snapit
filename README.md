# Snapit

Snapit is a web application with a separated frontend and backend structure.

## Structure

- **frontend/**: React + Vite application (Deployed on Netlify)
- **backend/**: Node.js + Express + MongoDB application

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB URI (for backend)

### Installation

1.  **Install Dependencies** (Root command installs for both):
    ```bash
    npm install
    # OR run manually in each folder:
    npm run install-all
    ```

2.  **Environment Variables**:
    - Create a `.env` file in `backend/` and `frontend/` as needed.

### Running Development Server

- **Frontend**:
  ```bash
  cd frontend
  npm run dev
  ```

- **Backend**:
  ```bash
  cd backend
  npm run dev
  ```

## Deployment

### Frontend

The frontend is deployed on Netlify.

- **Live URL**: [https://snapit-frontend-aditya-cse.netlify.app](https://snapit-frontend-aditya-cse.netlify.app)

### Backend

The backend needs to be deployed to a service like Render, Railway, or Heroku. 
Currently configured to run locally on port 5000 (default).

## Scripts

- `npm run install-all`: Installs dependencies for both frontend and backend.
- `npm run build`: Builds the frontend application.
