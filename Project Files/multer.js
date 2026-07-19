const multer = require("multer");

const fs = require("fs");

// Create uploads folder automatically
const path = require("path");

const uploadPath = path.join(__dirname, "..", "..", "uploads");

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1E9) +
            path.extname(file.originalname);

        cb(null, uniqueName);
    }

});

const fileFilter = (req, file, cb) => {

    const allowed = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp"
    ];

    if (allowed.includes(file.mimetype)) {

        cb(null, true);

    } else {

        cb(new Error("Only image files are allowed"));

    }

};

const upload = multer({

    storage,
    fileFilter

});

module.exports = upload;