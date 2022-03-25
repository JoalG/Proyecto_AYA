const { response } = require('express');
const express = require('express');
const { remove } = require('../models/User');
const router = express.Router();
const User = require('../models/User')
const crypto = require('crypto');

//GET 
//E: 
//S: Todos los users 
router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.json({
            success: true,
            message: 'Success',
            data: users
        });
    } catch (error) {
        res.status(200).json({
            success: true,
            message: 'Error',
            data: savedBill
        });
    }

});



//GET 
//E: 
//S: Get List 
router.get('/list', async(req, res) => {
    try {
        const user = await User.find();
        resultado = []
        user.forEach(element => {
            resultado.push(element.cedula);
        });


        res.json(resultado);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});


//GET de un user en especifico
//E: cedula 
//S: User sin password
router.get('/:cedula', async(req, res) => {
    try {
        const user = await User.findOne({ cedula: req.params.cedula });
        console.log(user);
        res.json(user);
    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});




//DELETE de un user
//E: cedula
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findUser = await User.findOne({ cedula: req.body.cedula });
        if (findUser != null) {
            const removeUser = await User.findOneAndRemove({ _id: findUser._id });
            res.json(removeUser);
        } else {
            res.status(401).send('Error. Este usuario no está en la base de datos');
        }

    } catch (error) {
        res.status(401).send('Ha ocurrido un error.');
    }

});



//POST (Insert)
//E: User
//S: User sin password
router.post('/', async(req, res) => {

    try {
        const findUser = await User.findOne({ cedula: req.body.cedula });
        if (findUser == null) {

            let salt = crypto.randomBytes(16).toString('hex');
            let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');

            const user = new User({
                name: req.body.name,
                lastname: req.body.lastname,
                salt: salt,
                hash: hash,
                email: req.body.email,
                cedula: req.body.cedula,
                userType: req.body.userType

            });

            console.log(user);

            await user.save(function(err) {
                if (err) {
                    res.status(200).json({
                        success: false,
                        message: "Error",
                        data: {}
                    });
                } else {
                    saveUser = user.toObject();

                    const token = user.generateJwt();
                    res.status(200).json({
                        success: true,
                        message: 'Success',
                        data: token
                    });
                }
            }); //metodo de mongoose para guardar 

        } else {
            res.status(200).json({
            success: false,
            message: "Usuario ya existe",
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


router.post('/signin', async (req, res) => {
    
    const { email, password } = req.body;

    try {
        const bill = new User({
            nis: req.body.nis,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            cedula: req.body.cedula,
            userType: req.body.userType,
            password: req.body.password
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

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send('The User doen\' exists');
    if (!user.validPassword(password)) return res.status(401).send('Wrong Password');

        const token = user.generateJwt();

    return res.status(200).json({token});
});



module.exports = router;