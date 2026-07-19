const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");
const path = require("path");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);


app.use(
    "/uploads",
    express.static(path.join(__dirname, "..", "uploads"))
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});