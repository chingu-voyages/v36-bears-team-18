const CITIES = require('../data/favoritesCity');



/*
    Return the data of 4 cities
 */
exports.getFavourties = (req, res, next) => {
    res.status(200).json({cities: CITIES})
}
