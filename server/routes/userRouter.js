const express = require('express')
const path = require('path');
const router = express.Router()
const createPath = (page) => {return path.resolve(__dirname, '..', 'ejs-views', `${page}.ejs`)};

router.get('/shopping_cart', (req, res) => {
    res.render(createPath('shopping_cart'))
})

module.exports = router