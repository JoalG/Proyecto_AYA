const { response } = require('express');
const express = require('express');
const { remove } = require('../models/ReporteAveria');
const router = express.Router();
const ReporteAveria = require('../models/ReporteAveria');


//GET 
//S: Todas los reportes de averia
router.get('/', async(req, res) => {
    try {
        const reports = await ReporteAveria.find();
        res.json({
            success: true,
            message: 'Success',
            data: reports
        });
    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});


//GET de un user en especifico
//E: _id 
//S: single report
router.get('/:_id', async(req, res) => {
    try {
        const report = await ReporteAveria.findOne({ cedula: req.params._id });
        res.json({
            success: true,
            message: 'Success',
            data: report
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
//E: ReporteAveria data
//S: ReporteAveria
router.post('/', async(req, res) => {
    try {
        const report = new ReporteAveria({
            provincia: req.body.provincia,
            canton: req.body.canton,
            distrito: req.body.distrito,
            nis: req.body.provincia,
            name: req.body.name,
            lastname: req.body.lastname,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            description: req.body.description,
            type: req.body.type,
            state: req.body.state,
            creationDate: new Date()
        });
                
        await report.save(function(err) {
            if (err) {
                res.status(200).json({
                    success: false,
                    err,
                    data: {}
                });
            } else {
                savedReport = report.toObject();
                res.status(200).json({
                    success: true,
                    message: 'Success',
                    data: savedReport
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
//E: ReporteAveria data
//S: ReporteAveria
router.patch('/', async(req, res) => {

    try {

        const findReport = await ReporteAveria.findOne({ _id: req.body._id });
        if (findReport != null) {

            const updateReport = await ReporteAveria.updateOne({_id: findReport._id}, {$set: {
                state: req.body.user.state
            }})
            res.status(200).json({
                success: true,
                message: "Reporte actualizado",
                data: updateReport
            })
        } else {
            res.status(200).json({
                success: false,
                message: "Reporte no existe",
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

//DELETE de un user
//E: _id
//S: report 
router.delete('/:_id', async(req, res) => {
    try {
        const findReport = await ReporteAveria.findOne({ _id: req.params._id });
        if (findReport != null) {
            const removeReport = await ReporteAveria.findOneAndRemove({ _id: findReport._id });
            res.status(200).json({
                success: true,
                message: 'Success',
                data: {}
            });
        } else {
            res.status(200).json({
                success: false,
                message: 'Error',
                data: {}
            });
        }

    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});

module.exports = router;