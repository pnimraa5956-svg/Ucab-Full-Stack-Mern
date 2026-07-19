const express = require("express");
const router = express.Router();

const upload = require("../middleware/multer");

const {
    addCar,
    getAllCars,
    updateCar,
    deleteCar
} = require("../controllers/carController");

// Add Car
router.post(
    "/",
    upload.single("carImage"),
    addCar
);

// Get All Cars
router.get("/", getAllCars);

// Update Car
router.put(
    "/:id",
    upload.single("carImage"),
    updateCar
);

// Delete Car
router.delete("/:id", deleteCar);

module.exports = router;