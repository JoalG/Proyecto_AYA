const express = require('express');
const router = express.Router();
const ArregloDePago = require('../models/ArregloDePago');
module.exports = router;

//GET 
//S: Todas los tramites
router.get('/', async(req, res) => {
    try {
        const tramites = await ArregloDePago.find().sort({date: -1});
        res.json({
            success: true,
            message: 'Success',
            data: tramites
        });
    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});