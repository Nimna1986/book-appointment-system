# 📅 Book Appointment System

A full-stack appointment booking application that allows users to view available appointment slots and book appointments through a web-based interface.

The project was built to practice **full-stack development, REST APIs, database integration, frontend development, and application-level error handling**.

## 🚀 Features

* 📅 View available appointment slots
* 📝 Book appointments through an interactive interface
* 🔄 Manage appointment information
* 🗄️ Persistent database storage
* 🔌 REST API for communication between frontend and backend
* ✅ Form validation
* ⚠️ Error handling and user feedback
* 📱 Responsive and user-friendly interface

## 🏗️ Project Architecture

The application follows a client-server architecture:

```text
┌─────────────────────┐
│      React UI       │
│      Frontend       │
└──────────┬──────────┘
           │
           │ HTTP / REST API
           ▼
┌─────────────────────┐
│       Backend       │
│   Business Logic    │
│      REST API       │
└──────────┬──────────┘
           │
           │ Database Operations
           ▼
┌─────────────────────┐
│      MongoDB        │
│    Data Storage     │
└─────────────────────┘
```

## 🛠️ Technologies Used

### Frontend

* React
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* REST API

### Database

* MongoDB

### Development Tools

* Git
* GitHub
* VS Code
* npm

## 📂 Project Structure

```text
Book-Appointment/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
│
├── .gitignore
└── README.md
```

> The exact structure may differ depending on the current implementation.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd Book-Appointment
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 4. Configure environment variables

Create a `.env` file in the backend directory.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Do **not** commit your `.env` file to GitHub.

### 5. Start the backend

```bash
npm start
```

### 6. Start the frontend

From the frontend directory:

```bash
npm run dev
```

The application can then be accessed through the local development URL shown by Vite.

## 🔌 API Overview

The backend provides REST API endpoints for managing appointments.

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/api/appointments`     | Retrieve appointments    |
| POST   | `/api/appointments`     | Create a new appointment |
| PUT    | `/api/appointments/:id` | Update an appointment    |
| DELETE | `/api/appointments/:id` | Delete an appointment    |


## 🧠 Challenges & What I Learned

This project helped me develop practical experience beyond simply writing frontend code.

### Frontend ↔ Backend Communication

I learned how a React frontend communicates with a backend through REST APIs and how to handle API responses and errors.

### Database Integration

I learned how application data can be stored persistently in MongoDB and accessed through backend operations.

### Error Handling

The application handles invalid input and failed operations by providing appropriate feedback to the user instead of allowing the application to fail silently.

### Application Structure

Working on the project helped me understand how to separate frontend, backend, API, and database responsibilities in a full-stack application.

## 🔮 Future Improvements

Possible improvements include:

* User authentication and authorization
* Admin dashboard
* Email/SMS appointment notifications
* Appointment reminders
* Calendar integration
* Better availability management
* Deployment to a cloud platform
* Automated testing
* Docker support

## 📚 Project Purpose

This project was developed as a personal learning project to strengthen my understanding of **full-stack software development and building database-backed web applications**.

It is part of my ongoing effort to develop practical software engineering skills through projects outside university coursework.

## 👨‍💻 Author

**Nimna Chamathka**

Engineering Undergraduate
University of Moratuwa

GitHub: [Nimna1986](https://github.com/Nimna1986)
