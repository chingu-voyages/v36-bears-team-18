const router = require('express').Router()

const citiesControllers = require('../controllers/cities');

/*
    METHOD: GET
    Public: True
    Get the data of 4 cities
 */
router.get('/favourites', citiesControllers.getFavourties);

module.exports = router;
