const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    bookRide,
    myBookings,
    allBookings
} = require("../controllers/bookingController");

router.post("/", authMiddleware, bookRide);

router.get("/my", authMiddleware, myBookings);

router.get("/", allBookings);

module.exports = router;