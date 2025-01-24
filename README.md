# Task Management App

A full-stack task management application that allows users to create, view, update, and delete tasks. 
It also provides features like task filtering, user authentication, and a dashboard displaying task statistics.

---

## Features

### Frontend
- **React-based Interface** for managing tasks.
- **CRUD Operations**: Create, view, update, and delete tasks.
- **Task Filtering**: Filter tasks by status (`completed`, `pending`).
- **Styling**: Styled with Tailwind CSS.
- **Dashboard**: Displays statistics (total tasks, completed tasks, pending tasks).

### Backend
- **Node.js & Express API** for managing tasks.
- **MongoDB** for data storage.
- **Authentication**: User registration and login using JWT.

---

## Prerequisites

1. **Node.js**: Install from [Node.js official site](https://nodejs.org/).
2. **MongoDB**: Install and run MongoDB locally or use a cloud database (e.g., MongoDB Atlas).
3. **Postman**: (Optional) For testing backend endpoints.

---

## Project Structure

```
root/
├── backend/
│   ├── server.js
│   ├── package.json
│   └──package-lock.json
│   
│   
│     
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

---

## Backend Setup

### Installation

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   Create a `.env` file in the `backend` folder and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

### API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/api/users/register` | Register a new user     |
| POST   | `/api/users/login`    | User login              |
| GET    | `/api/tasks`         | Get all tasks           |
| POST   | `/api/tasks`         | Create a new task       |
| PUT    | `/api/tasks/:id`     | Update a task           |
| DELETE | `/api/tasks/:id`     | Delete a task           |

---

## Frontend Setup

### Installation

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:5173`.

### Configuration

Ensure the backend URL is set correctly in the frontend. Update the `api.js` file in the `services` folder:

```javascript
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export default API;
```

---

## Using the Application

1. **User Registration and Login**:
   - Navigate to the `/register` route to create a new user account.
   - Use the `/login` route to log in with your credentials.

2. **Dashboard**:
   - After logging in, access the `/dashboard` route.
   - View all tasks, filter by status, and create new tasks.
   - Task statistics (total, completed, and pending) are displayed on the dashboard.

3. **Task Management**:
   - Create, update, delete, and mark tasks as completed from the dashboard.

---

## Testing the Backend with Postman

1. Use Postman to test the backend API endpoints:
   - Register a user with the `/api/users/register` endpoint.
   - Log in with the `/api/users/login` endpoint to get a JWT token.
   - Add the token to the `Authorization` header as `Bearer <token>` for task-related endpoints.

2. Perform CRUD operations on the `/api/tasks` endpoints to test task management.

---

## NPM Packages Used

### Frontend
- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling routes and navigation.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Backend
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **dotenv**: For managing environment variables.
- **bcryptjs**: For hashing passwords.
- **jsonwebtoken**: For generating and verifying JWTs.
- **cors**: For enabling cross-origin resource sharing.

---

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express

- **Database**:
  - MongoDB

---

## Future Enhancements

- Add drag-and-drop functionality for task prioritization.
- Implement real-time updates using WebSockets.
- Add due dates and reminders for tasks.

---


## License

This project is licensed under the MIT License.
