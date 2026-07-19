# 🚖 UCAB – Smart Cab Booking System

A modern full-stack cab booking web application built with the MERN Stack (MongoDB, Express.js, React.js, and Node.js). UCAB provides a smooth ride-booking experience by allowing users to search for available cabs, make bookings, and manage their rides, while administrators can efficiently manage the platform through a dedicated dashboard.

Designed with a responsive interface and secure authentication, the project demonstrates the implementation of a complete CRUD-based web application with separate user and admin functionalities.

---

# ✨ Key Features

## 👤 User Features

- Create a new account and securely log in
- JWT-based authentication and authorization
- Browse available cabs
- Book rides instantly
- View booking history
- Responsive dashboard for desktop and mobile
- Easy-to-use interface

## 🛡️ Admin Features

- Secure admin login
- Interactive admin dashboard
- View platform statistics
- Manage cab inventory
- Add, edit, and remove vehicles
- View registered users
- Monitor all ride bookings
- Upload and manage vehicle images

---

# 🛠️ Technology Stack

## Frontend

- React.js
- React Router DOM
- Bootstrap
- Axios
- Recharts

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt
- Multer

## Database

- MongoDB Atlas

---

# 📁 Project Structure

```text
UCAB/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   │
│   ├── uploads/
│   └── package.json
│
├── screenshots/
├── README.md
└── .gitignore
```

---

# 📸 Application Preview

## 🏠 Home Page

![Home](screenshots/landing.png)

## 🔑 User Login

![User Login](screenshots/User_Login.png)

## 👤 User Dashboard

![Dashboard](screenshots/User_Home.png)

## 🚗 Available Cabs

![Cabs](screenshots/User_Cabs.png)

## 📖 My Bookings

![Bookings](screenshots/User_MyBookings.png)

## 📊 Admin Dashboard

![Admin Dashboard](screenshots/Admin_Dashboard.png)

## 🚘 Manage Cars

![Manage Cars](screenshots/Admin_ManageCars.png)

## 👥 Registered Users

![Users](screenshots/Users.png)

## 📅 Ride Bookings

![Bookings](screenshots/Admin_Bookings.png)

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/UCAB.git
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
npm run dev
```

---

## 3. Install Backend Dependencies

```bash
cd server
npm install
node src/server.js
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** directory and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 🎯 Future Improvements

- 💳 Online payment integration
- 📍 Live GPS tracking
- 🗺️ Google Maps API support
- ⭐ Driver rating and review system
- 📧 Email notifications
- 📱 Progressive Web App (PWA)
- 🌙 Dark mode support
- 📈 Booking analytics

---

# 👨‍💻 Developed By

**PATAN NIMRAA FIRDOS**

B.Tech – Computer Science Engineering

GitHub: https://github.com/YOUR_GITHUB_USERNAME

---

# 📜 License

This project is developed for learning and educational purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub. Your support is greatly appreciated!