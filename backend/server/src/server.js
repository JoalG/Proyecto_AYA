const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// imports ROUTES
const billRoute = require('./routes/bills');
const usersRoute = require('./routes/users');
const ReporteAveriaRoute = require('./routes/reporteAveria');

app.use('/bills', billRoute);
app.use('/users', usersRoute);
app.use('/reportesAverias', ReporteAveriaRoute);


mongoose.connect(
    process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log('Connected to AyA DB!!!');
    }
);

// server listing in  port 3000
app.listen(3000);