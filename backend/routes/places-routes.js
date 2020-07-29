const express = require("express");

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.get("/:pid", placesControllers.getPlaceById);

router.post('/', placesControllers.createPlace);

router.patch('/:pid', placesControllers.updatePlace);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
