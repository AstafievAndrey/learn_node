var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrOthers = require('../controllers/others');

//страницы местоположений
router.get('/', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/locations/review/new', ctrlLocations.addReview);

//другие страницы
router.get('/about', ctrOthers.about);

module.exports = router;
