const mongoose = require('mongoose');

const SuspensionSchema = mongoose.Schema({
    provincia:{
        type: String,
        required: true
    },
    canton:{
        type: String,
        required: true
    },
    fechaInit: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Suspension', SuspensionSchema);