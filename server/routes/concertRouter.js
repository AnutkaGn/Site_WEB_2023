const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const Concerts = require('../models/concert')
const router = express.Router()
const createPath = (page) => {return path.resolve(__dirname, '..', 'ejs-views', `${page}.ejs`)};

router.get('/concert/:id', (req, res) => {
    Concerts
        .findById(new mongoose.Types.ObjectId(req.params.id))
        .then((concert) => {
            res.render(createPath('concert'), {concert})
        })
        .catch((error) => {console.log(error)});
})

module.exports = router