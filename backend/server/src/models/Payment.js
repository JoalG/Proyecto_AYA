const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    nis:{
        type: String,
        required: true
    },
    clientIdType: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    facturacionDate: {
        type: Date,
        required: true
    },
    pagoDate: {
        type: Date,
        required: true
    },
    recaudador: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    agencia: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);