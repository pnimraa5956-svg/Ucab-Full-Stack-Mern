const MyBooking = require("../models/MyBookings");
const Car = require("../models/Car");

// Book Ride
const bookRide = async (req, res) => {
    try {

        const {
            carId,
            selectedPickupState,
            selectedPickupCity,
            selectedDropState,
            selectedDropCity,
            pickupdate,
            pickuptime,
            dropdate,
            droptime
        } = req.body;

        const car = await Car.findById(carId);

        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found"
            });
        }

        const booking = await MyBooking.create({

            selectedPickupState,
            selectedPickupCity,
            selectedDropState,
            selectedDropCity,
            pickupdate,
            pickuptime,
            dropdate,
            droptime,

            drivername: car.drivername,
            fare: car.price,
            carname: car.carname,
            cartype: car.cartype,
            carno: car.carno,
            price: car.price,

            userId: req.user.id

        });

        res.status(201).json({
            success: true,
            message: "Ride Booked Successfully",
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Logged-in User Bookings

const myBookings = async (req, res) => {

    try {

        const bookings = await MyBooking.find({
            userId: req.user.id
        });

        res.status(200).json({
            success: true,
            count: bookings.length,
            bookings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Admin - All Bookings

const allBookings = async (req, res) => {

    try {

        const bookings = await MyBooking.find().populate(
            "userId",
            "name email"
        );

        res.status(200).json({
            success: true,
            count: bookings.length,
            bookings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {
    bookRide,
    myBookings,
    allBookings
};