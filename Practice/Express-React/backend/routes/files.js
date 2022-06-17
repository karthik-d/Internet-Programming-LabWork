var express = require('express');
var fs = require('fs');

var router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Working all right"
    })
});

module.exports = router;