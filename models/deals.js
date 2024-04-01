const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    dealId: {
        type: Number,
        required: true,
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car', 
        required: true,
    },
    dealershipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dealership', 
        required: true,
    },
    dealInfo: {
        sellingPrice: {
            type: Number,
            required: true,
        },
        originalPrice: {
            type: Number,
            required: true,
        },
        
    },
});

const Deal = mongoose.model("Deal", dealSchema);

module.exports = Deal;
