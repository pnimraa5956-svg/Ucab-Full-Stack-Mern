const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Car = require("../models/Car");
const Booking = require("../models/MyBookings");

// Register Admin
const registerAdmin = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "Admin Registered Successfully",
            admin: {
                _id: admin._id,
                name: admin.name,
                email: admin.email
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Login Admin

const loginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Admin not found"
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: admin._id,
                role: admin.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Admin Login Successful",
            token,
            admin: {
                _id: admin._id,
                name: admin.name,
                email: admin.email
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Admin Profile

const getAdminProfile = async (req, res) => {

    try {

        const admin = await Admin.findById(req.user.id).select("-password");

        res.status(200).json({
            success: true,
            admin
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Dashboard Statistics

const getDashboardStats = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalCars = await Car.countDocuments();

        const totalBookings = await Booking.countDocuments();

        res.status(200).json({

            success: true,

            users: totalUsers,

            cars: totalCars,

            bookings: totalBookings

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    getDashboardStats
};