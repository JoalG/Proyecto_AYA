const mongoose = require('mongoose');
var crypto = require('crypto');
const jwt = require('jsonwebtoken');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    }
});

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      lastname: this.lastname,
      cedula: this.cedula,
      userType: this.userType,
      exp: parseInt(expiry.getTime() / 1000),
    }, "secretkey"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('User', UserSchema);