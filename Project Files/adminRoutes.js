const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");

const {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    getDashboardStats
} = require("../controllers/adminController");

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.get("/dashboard", getDashboardStats);

router.get(
    "/profile",
    authMiddleware,
    adminMiddleware,
    getAdminProfile
);

module.exports = router;