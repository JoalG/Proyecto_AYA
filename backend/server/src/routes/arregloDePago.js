const express = require('express');
const router = express.Router();
const ArregloDePago = require('../models/ArregloDePago');
module.exports = router;

//GET 
//S: un tramite por _id
router.get('/:_id', async(req, res) => {
    try {
        const arregloDePago = await ArregloDePago.findOne({_id: req.params._id});
        res.json({
            success: true,
            message: 'Success',
            data: arregloDePago
        });
    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});

//POST (Insert)
//E: ArregloDePago data
//S: ArregloDePago
router.post('/', async(req, res) => {
    try {
        const arregloDePago = new ArregloDePago({
            nis: req.body.nis,
            clientName: req.body.clientName,
            date: new Date(),
            state: 'Pendiente',
            type: 'Arreglo de pago',
            telephone: req.body.telephone,
            cellphone: req.body.cellphone,
            email: req.body.email,
            observations: req.body.observations,
        });
                
        await arregloDePago.save(function(err) {
            if (err) {
                res.status(200).json({
                    success: false,
                    err,
                    data: {}
                });
            } else {
                savedArregloDePago = arregloDePago.toObject();
                res.status(200).json({
                    success: true,
                    message: 'Success',
                    data: savedArregloDePago
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

//PATCH (update)
//E: ArregloDePago data
//S: ArregloDePago
router.patch('/', async(req, res) => {

    try {

        const findArregloDePago = await ArregloDePago.findOne({ _id: req.body._id });
        if (findArregloDePago != null) {

            const updatedArregloDePago = await ArregloDePago.updateOne({_id: findSuspension._id}, {$set: {
                state: req.body.state
            }})
            res.status(200).json({
                success: true,
                message: "Arreglo de pago actualizado",
                data: updatedArregloDePago
            })
        } else {
            res.status(200).json({
                success: false,
                message: "Arreglo de pago no existe",
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