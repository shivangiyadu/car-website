const mongoose = require('mongoose');

const soldVehiclesSchema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    },
    soldBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dealership',
        required: true,
    },
    soldTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dateOfTransaction: {
        type: Date,
        default: Date.now,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMode: {
        type: String,
        enum: ['cash', 'debit card', 'credit card'],
        required: true,
    },
});

const SoldVehicles = mongoose.model('SoldVehicles', soldVehiclesSchema);

module.exports = SoldVehicles;

