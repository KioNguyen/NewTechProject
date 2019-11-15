var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('users', userSchema);