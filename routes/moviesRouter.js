const express = require('express')
const router = express.Router()
const movieController = require('../controllers/moviesController')


// index

router.get('/', movieController.index)

// show

router.get('/:id', movieController.show)

// store

router.post('/:id/reviews', movieController.store)


module.exports = router