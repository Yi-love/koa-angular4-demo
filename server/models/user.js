const mongoose = require('mongoose');
let UserSchema = require('../schemas/user');
let User = mongoose.model('User' , UserSchema);

module.exports = User;