const { response } = require('express');
const express = require('express');
const { remove } = require('../models/Bill');
const router = express.Router();
const Bill = require('../models/Bill');



//GET 
//S: Todas las bills
router.get('/', async(req, res) => {
    try {
        const bill = await Bill.find();
        res.json(bill);
    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});


//GET de bill al cobro
//E: Nis
//S: Bills
router.get('/collection/:_nis&:_clientIdType&:_clientId', async(req, res) => {
    try {
        const bill = await Bill.findOne({ 
            nis: req.params._nis,
            clientIdType: req.params._clientIdType,
            clientId: req.params._clientId,
            state: "Puesto al cobro"
        });

        //console.log(bill);

        if(bill != null){
            res.status(200).json({
                success: true,
                message: 'Success',
                data: bill
            });
        }else{
            res.status(200).json({
                success: false,
                message: 'Los datos no coinciden con los de ningun cliente.',
                data: bill
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

//GET de bill al cobro
//E: Nis
//S: Bills
router.get('/history/:_nis&:_clientIdType&:_clientId', async(req, res) => {
    try {
        const bill = await Bill.find({ 
            nis: req.params._nis,
            clientIdType: req.params._clientIdType,
            clientId: req.params._clientId
        });

        //console.log(bill);
        
        if(bill != null){
            res.status(200).json({
                success: true,
                message: 'Success',
                data: bill
            });
        }else{
            res.status(200).json({
                success: false,
                message: 'Los datos no coinciden con los de ningun cliente.',
                data: bill
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
//E: Bill data
//S: Bill
router.post('/', async(req, res) => {
    try {
        const bill = new Bill({
            nis: req.body.nis,
            clientIdType: req.body.clientIdType,
            clientId: req.body.clientId,
            date: req.body.date,
            billingNumber: req.body.billingNumber,
            consumption: req.body.consumption,
            expirationDate: req.body.expirationDate,
            documentType: req.body.documentType,
            state: req.body.state,
            amount: req.body.amount,
            others: req.body.others,
            total: req.body.total
        });
        
        //console.log(bill);
        
        await bill.save(function(err) {
            if (err) {
                res.status(200).json({
                    success: false,
                    err,
                    data: {}
                });
            } else {
                savedBill = bill.toObject();
                res.status(200).json({
                    success: true,
                    message: 'Success',
                    data: savedBill
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
});

module.exports = router;