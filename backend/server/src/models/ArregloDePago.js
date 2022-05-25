const mongoose = require('mongoose');

const ArregloDePagoSchema = mongoose.Schema({
    nis:{
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    state: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    observations: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ArregloDePago', ArregloDePagoSchema);