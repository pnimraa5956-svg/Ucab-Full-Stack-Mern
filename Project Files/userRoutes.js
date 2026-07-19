const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getProfile,
    getAllUsers,
    updateUser,
    deleteUser
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", getAllUsers);
router.get("/profile", authMiddleware, getProfile);

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;