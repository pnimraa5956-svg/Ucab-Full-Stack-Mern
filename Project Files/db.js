const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MONGO_URI is missing from .env");
        }

        await mongoose.connect(mongoUri);

        console.log("✅ MongoDB Connected Successfully");

    } catch (error) {

        console.log("❌ MongoDB Connection Failed");
        console.log(error.message);
        process.exit(1);

    }
};

module.exports = connectDB;