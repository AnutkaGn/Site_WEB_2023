const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tickets: {
        type: Array
    },
    status: {
        type: Boolean
    }
});

const User = mongoose.model('Users', userSchema);

module.exports = User;