const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    firstName: {

        type: String,
        required: true,
    },

    lastName: {

        type: String,
        required: true,
    },

    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    Confirm_password: {
        type: String,
        required: true,
    },
    
    role: {
        type: String,
        enum: ["dealer", "user", "admin"],
        required: true,
    },
});

module.exports = mongoose.model("UserInfo", userInfoSchema);
