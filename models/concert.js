const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
    maxrow: {
        type: Number,
        required: true
    },
    maxseat:{
        type: Number,
        required: true
    },
    concertname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Concert = mongoose.model('Concerts', concertSchema);

module.exports = Concert;