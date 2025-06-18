# Task Manager Backend

A simple REST API for managing tasks built with Express.js and PostgreSQL.

## Setup

1. **Install dependencies**
   ```
   npm install
   ```

2. **Configure environment variables**
   
   Make sure you have a `.env` file with the following variables:
   ```
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/taskmanager
   PORT=5000
   ```

3. **Start the server**
   ```
   npm start
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a specific task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Task Model

```
{
  "id": number,
  "title": string,
  "description": string,
  "status": "todo" | "in_progress" | "done",
  "dueDate": date (optional),
  "createdAt": date,
  "updatedAt": date
}
```