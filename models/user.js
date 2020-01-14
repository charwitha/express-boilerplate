var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    type: {type: String, default: 'user'},
    avatar: {type: String, required: false},
    fullname: {type: String, required: false},
    username: {type: String, required: false, unique: true},
    email: {type: String, required: false, unique: true},
    password: {type: String, required: false},
    points: {type: Number, default: 0},
    status: {type: String, default: 'inactive'},
    createdOn: {type: Date, default: Date.now()}
});

var User = mongoose.model('User', userSchema, 'user');
module.exports = User