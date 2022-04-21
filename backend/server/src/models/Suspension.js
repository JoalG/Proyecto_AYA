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
    fecha_init: {
        type: Date,
        required: true
    },
    fecha_fin: {
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