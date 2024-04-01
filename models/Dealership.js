const mongoose = require("mongoose");

const dealershipSchema = new mongoose.Schema({
 
    dealershipId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
 
    contact: {
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },

    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    }]
});

module.exports = mongoose.model("Dealership", dealershipSchema);
