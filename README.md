# Restomart Task Manager

A full-stack task management application with a React frontend and Express/PostgreSQL backend.

## Screenshots

### Task List View
![Task List](Frontend/images/task_list.png)

### Add/Edit Task Form
![Task Form](Frontend/images/add_task.png)

## Project Structure

```
c:\Users\kchir\Desktop\Restomart_task_manager\
├── Backend/             # Express.js API
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── ...
└── Frontend/            # React application
    ├── images/          # Screenshots
    ├── public/          # Static files
    ├── src/             # Source code
    │   ├── components/  # Reusable components
    │   ├── pages/       # Page components
    │   └── ...
    └── ...
```

## Quick Start

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd Backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your PostgreSQL database in `.env` file:
   ```
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/taskmanager
   PORT=5000
   ```

4. Start the server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd Frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Technologies Used

- **Frontend**: React, React Router, Tailwind CSS, Vite
- **Backend**: Express.js, Sequelize ORM, PostgreSQL
- **Development**: Node.js, npm