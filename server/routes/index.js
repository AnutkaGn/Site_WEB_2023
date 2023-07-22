const mainRouter = require('./mainRouter')
const concertRouter = require('./concertRouter')
const userRouter = require('./userRouter')
const express = require('express')
const router = express.Router()

router.use('/', mainRouter)
router.use('/', concertRouter)
router.use('/', userRouter)

module.exports = router