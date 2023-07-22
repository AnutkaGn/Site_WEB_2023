const express = require('express')
const path = require('path');
const Concerts = require('../models/concert')
const router = express.Router()
const createPath = (page) => {return path.resolve(__dirname, '..', 'ejs-views', `${page}.ejs`)};

let checkedTypes = ['all']
let returnedConcerts = []

router.get('/types', (req, res) => {
    const types = JSON.parse(req.query.types);
    checkedTypes = types
    if ((types.length==1 && types[0]=='all') || types.length == 0){
        Concerts
            .find()
            .then((concerts) => {
                returnedConcerts = concerts
                res.render(createPath('index'), {concerts, checkedTypes}, (err, html) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send('Internal Server Error');
                    } else {
                        res.send(html);
                    }
                }) 
            })
            .catch((error) => {console.log(error)});
    }
    else{
        Concerts
            .find({type: {$in: types}})
            .then((concerts) => {
                returnedConcerts = concerts
                res.render(createPath('index'), {concerts, checkedTypes}, (err, html) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send('Internal Server Error');
                    } else {
                        res.send(html);
                    }
                }) 
            })
            .catch((error) => {console.log(error)});
    }
})

router.get('/', (req, res) => {
    Concerts
        .find()
        .then((concerts) => {
            returnedConcerts = concerts
            res.render(createPath('index'), {concerts, checkedTypes}) 
        })
        .catch((error) => {console.log(error)});
})

module.exports = router