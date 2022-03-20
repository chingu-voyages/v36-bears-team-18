const CITIES = require('../data/favoritesCity');
const catchAsync = require('../utils/catchAsync');



/*
    Return the data of 4 cities
 */
exports.getFavourties = catchAsync(async(req, res, next) => {
    console.log("checking",req.body)
    res.status(200).json({cities: CITIES})
})
