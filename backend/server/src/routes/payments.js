const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');


//GET all payments
//E: none
//S: payments
router.get('/', async(req, res) => {
    try {
        const payments = await Payment.find();
        res.json({
            success: true,
            message: 'Success',
            data: payments
        });
    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});


//GET payments
//E: Nis, clientIdType, clientId
//S: payments
router.get('/:_nis&:_clientIdType&:_clientId', async(req, res) => {
    try {
        const payment = await Payment.findOne({ 
            nis: req.params._nis,
            clientIdType: req.params._clientIdType,
            clientId: req.params._clientId,
        });

        if(payment != null){
            const payments = await Payment.find({ 
                nis: req.params._nis,
                clientIdType: req.params._clientIdType,
                clientId: req.params._clientId,
            });
            res.status(200).json({
                success: true,
                message: 'Success',
                data: payments
            });
        }else{
            res.status(200).json({
                success: false,
                message: 'Los datos no coinciden con los de ningun cliente.',
                data: {}
            });            
        }

    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});

//POST (Insert)
//E: Payment data
//S: none
router.post('/', async(req, res) => {
    for (let index = 0; index < 10; index++) {
        facDate = randomDate(new Date('2018-01-01'), new Date());

        try {

            

            const payment = new Payment({
                nis: getRandomInt(1000000, 9999999).toString(),
                clientIdType: 'Cédula de identidad',
                clientId: getRandomInt(100000000, 999999999).toString(),
                facturacionDate: facDate,
                pagoDate: new Date(facDate.setDate(facDate.getDate() + 5)),
                recaudador: 'BAC San José',
                agencia: 'COPENAE',
                total: getRandomInt(10000, 100000).toString()
            });
                    
            await payment.save(function(err) {
                if (err) {
                    res.status(200).json({
                        success: false,
                        err,
                        data: {}
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        message: 'Success',
                        data: payment.toObject()
                    });
                }
            }); //metodo de mongoose para guardar 
    
        } catch ({ message }) {
            res.status(200).json({
                success: false,
                message,
                data: {}
            });
        }      
    }
    
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

module.exports = router;