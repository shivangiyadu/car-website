const mongoose = require("mongoose");


const carSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    carInfo: {
        yearOfManufacture: {
            type: Number,
            required: true,
        },
        ownerName: {
            type: String,
            required: true,
        },
    },
    carCondition: {
        type: String,
        enum: ["good", "bad", "superb"],
        required: true,
    },
    dealershipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dealership',
        required: true,
    },
});

const Car = mongoose.model("Car", carSchema);

module.exports = {Dealership };
