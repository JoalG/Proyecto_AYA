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
const suspensionRoute = require('./routes/suspensions');
const paymentRoute = require('./routes/payments');
const tramitesRoute = require('./routes/tramites');
const arregloDePagoRoute = require('./routes/arregloDePago');


app.use('/bills', billRoute);
app.use('/users', usersRoute);
app.use('/reportesAverias', ReporteAveriaRoute);
app.use('/suspensions', suspensionRoute);
app.use('/payments', paymentRoute);
app.use('/tramites', tramitesRoute);
app.use('/arregloDePago', arregloDePagoRoute);

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