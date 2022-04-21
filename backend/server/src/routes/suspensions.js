const express = require('express');
const router = express.Router();
const Suspension = require('../models/Suspension');
module.exports = router;

//GET 
//S: Todas las suspensiones
router.get('/', async(req, res) => {
    try {
        const suspensions = await Suspension.find({deleted: false});
        res.json({
            success: true,
            message: 'Success',
            data: suspensions
        });
    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});


//GET de suspensiones segun provincia y canton
//E: provincia y canton
//S: suspensiones
router.get('/:provincia/:canton', async(req, res) => {
    try {
        const suspensions = await Suspension.find({ provincia: req.params.provincia, canton: req.params.canton, deleted: false });
        res.json({
            success: true,
            message: 'Success',
            data: suspensions
        });
    } catch (message) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});


//POST (Insert)
//E: Suspension data
//S: Suspension
router.post('/', async(req, res) => {
    try {
        const suspension = new Suspension({
            provincia: req.body.provincia,
            canton: req.body.canton,
            fechaInit: req.body.fechaInit,
            fechaFin: req.body.fechaFin,
            description: req.body.description,
            deleted: false
        });
                
        await suspension.save(function(err) {
            if (err) {
                res.status(200).json({
                    success: false,
                    err,
                    data: {}
                });
            } else {
                savedSuspension = suspension.toObject();
                res.status(200).json({
                    success: true,
                    message: 'Success',
                    data: savedSuspension
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
//E: Suspension data
//S: Suspension
router.patch('/', async(req, res) => {

    try {

        const findSuspension = await Suspension.findOne({ _id: req.body._id });
        if (findSuspension != null) {

            const updateSuspension = await Suspension.updateOne({_id: findSuspension._id}, {$set: {
                provincia: req.body.provincia,
                canton: req.body.canton,
                fechaInit: req.body.fechaInit,
                fechaFin: req.body.fechaFin,
                description: req.body.description
            }})
            res.status(200).json({
                success: true,
                message: "Suspension actualizado",
                data: updateSuspension
            })
        } else {
            res.status(200).json({
                success: false,
                message: "Suspension no existe",
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

//PATCH (update) "delete" suspension
//E: _id
//S: suspension
router.patch('/delete', async(req, res) => {

    try {

        const findSuspension = await Suspension.findOne({ _id: req.body._id });
        if (findSuspension != null) {

            const updateSuspension = await Suspension.updateOne({_id: findSuspension._id}, {$set: {
                deleted: true
            }})
            res.status(200).json({
                success: true,
                message: "Suspension eliminada",
                data: updateSuspension
            })
        } else {
            res.status(200).json({
                success: false,
                message: "Suspension no existe",
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