const mongoose = require('mongoose');

const ReporteAveriaSchema = mongoose.Schema({
    provincia:{
        type: String,
        required: true
    },
    canton:{
        type: String,
        required: true
    },
    distrito:{
        type: String,
        required: true
    },
    nis:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    type:{
        type: Number,
        required: true
    },
    state:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ReporteAveria', ReporteAveriaSchema);