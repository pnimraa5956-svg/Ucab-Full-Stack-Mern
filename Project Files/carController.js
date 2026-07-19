const Car = require("../models/Car");

const addCar = async (req, res) => {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    try {

        const {
            drivername,
            carname,
            cartype,
            price,
            carno
        } = req.body;

        if (
            !drivername ||
            !carname ||
            !cartype ||
            !price ||
            !carno
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingCar = await Car.findOne({ carno });

        if (existingCar) {
            return res.status(400).json({
                success: false,
                message: "Car already exists"
            });
        }

        const carImage = req.file
            ? `/uploads/${req.file.filename}`
            : "";

        const car = await Car.create({

            drivername,
            carImage,
            carname,
            cartype,
            price,
            carno

        });

        res.status(201).json({

            success: true,
            message: "Car Added Successfully",
            car

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const getAllCars = async (req, res) => {

    try {

        const cars = await Car.find();

        res.status(200).json({
            success: true,
            count: cars.length,
            cars
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateCar = async (req, res) => {

    try {

        const data = {

            drivername: req.body.drivername,
            carname: req.body.carname,
            cartype: req.body.cartype,
            price: req.body.price,
            carno: req.body.carno

        };

        if (req.file) {

            data.carImage = `/uploads/${req.file.filename}`;

        }

        const car = await Car.findByIdAndUpdate(

            req.params.id,
            data,
            {
                new: true,
                runValidators: true
            }

        );

        if (!car) {

            return res.status(404).json({

                success: false,
                message: "Car not found"

            });

        }

        res.status(200).json({

            success: true,
            message: "Car Updated Successfully",
            car

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const deleteCar = async (req, res) => {
    try {

        const car = await Car.findByIdAndDelete(req.params.id);

        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Car Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    addCar,
    getAllCars,
    updateCar,
    deleteCar
};