const express = require("express");

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('GET Request in Places');
    res.json({message: 'it works'});
});

module.exports = router;