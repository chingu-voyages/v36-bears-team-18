const CITIES = require('../data/favoritesCity');
const catchAsync = require('../utils/catchAsync');



/*
    Return the data of 4 cities
 */
exports.getFavourties = catchAsync((req, res, next) => {
    res.status(200).json({cities: CITIES})
})
