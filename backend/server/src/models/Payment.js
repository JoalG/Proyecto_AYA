const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
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
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    billingNumber: {
        type: String,
        required: true
    },
    consumption: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true,
        default: Date.now    
    },
    documentType: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
        //Puesto al cobro o Cancelado
    },
    amount: {
        type: String ,
        required: true
    },
    others: {
        type: String ,
        required: true
    },
    total: {
        type: String ,
        required: true
    }
});

module.exports = mongoose.model('Bill', BillSchema);