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
        const users = await User.find({deleted: false});
        res.json({
            success: true,
            message: 'Success',
            data: users
        });
    } catch (message) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});



//GET de un user en especifico
//E: cedula 
//S: User sin password
router.get('/:cedula', async(req, res) => {
    try {
        const user = await User.findOne({ cedula: req.params.cedula, deleted: false });
        res.json({
            success: true,
            message: 'Success',
            data: user
        });
    } catch (message) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }

});




//DELETE de un user
//E: cedula
//S: User 
router.delete('/:cedula', async(req, res) => {
    try {
        const findUser = await User.findOne({ cedula: req.params.cedula });
        if (findUser != null) {
            const removeUser = await User.findOneAndRemove({ _id: findUser._id });
            res.status(200).json({
                success: true,
                message: 'Success',
                data: {}
            });
        } else {
            res.status(200).json({
                success: false,
                message: 'Error',
                data: token
            });
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
        const findUser = await User.findOne({ cedula: req.body.cedula, deleted: false});
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
                userType: req.body.userType,
                deleted: false
            });

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

router.patch('/', async(req, res) => {

    try {
        const findUser = await User.findOne({ cedula: req.body.originalCedula, deleted: false });
        if (findUser != null) {

            if(req.body.originalCedula != req.body.user.cedula){
                const findOtherUser = await User.findOne({ cedula: req.body.user.cedula, deleted: false });
                if(findOtherUser != null){
                    return res.status(200).json({
                        success: false,
                        message: "Usuario ya existe",
                        data: {}
                    })
                }
            }
            if(req.body.password != null){

                let salt = crypto.randomBytes(16).toString('hex');
                let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');

                const updatedUser = await User.updateOne({_id: findUser._id}, {$set: {
                    name: req.body.user.name,
                    lastname: req.body.user.lastname,
                    email: req.body.user.email,
                    cedula: req.body.user.cedula,
                    userType: req.body.user.userType,
                    salt: salt,
                    hash: hash
                }})
                res.status(200).json({
                    success: true,
                    message: "Usuario actualizado",
                    data: {}
                })
            }
            else{
                const updatedUser = await User.updateOne({_id: findUser._id}, {$set: {
                    name: req.body.user.name,
                    lastname: req.body.user.lastname,
                    email: req.body.user.email,
                    cedula: req.body.user.cedula,
                    userType: req.body.user.userType
                }})
                res.status(200).json({
                    success: true,
                    message: "Usuario actualizado",
                    data: {}
                })
            }
        } else {
            res.status(200).json({
            success: false,
            message: "Usuario No existe",
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

router.patch('/delete', async(req, res) => {

    try {

        const findUser = await User.findOne({ cedula: req.body.cedula });
        if (findUser != null) {

            const updatedUser = await User.updateOne({_id: findUser._id}, {$set: {
                deleted: true
            }})
            res.status(200).json({
                success: true,
                message: "Usuario eliminado",
                data: {}
            })
            

        } else {
            res.status(200).json({
            success: false,
            message: "Usuario No existe",
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

router.patch('/newAt', async(req, res) => {
    try {

        const updatedUser = await User.updateMany({}, {$set: {deleted: false}})
        res.status(200).json({
            success: true,
            message: "Usuarios cambiadosq",
            data: updatedUser
        })

    } catch ({ message }) {
        res.status(200).json({
            success: false,
            message,
            data: {}
        });
    }
});

router.post('/login', async (req, res) => {
    
    const user = await User.findOne({ email: req.body.email });
    if (user != null) {
        if (user.validPassword(req.body.password)) {
            res.status(200).json({
                success: true,
                message: "Login exitoso",
                data: user.generateJwt()
            });
        } else {
            res.status(200).json({
                success: false,
                message: "Contraseña incorrecta",
                data: {}
            });
        }
    } else {
        res.status(200).json({
            success: false,
            message: "Usuario no existe",
            data: {}
        });
    }
});



module.exports = router;