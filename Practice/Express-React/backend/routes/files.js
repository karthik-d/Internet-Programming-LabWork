var express = require('express');
var fs = require('fs');

const UserModel = require('../models/users');

var router = express.Router();

router.get('/', (req, res, next) => {
    UserModel
        .getCollection()
        .then((collection) => {
            console.log(collection.find().toArray());
            collection
                .find()
                .toArray()
                .then((resources) => {
                    res.status(200).send(
                        Object.assign({
                            message: "Working all right",
                        },
                            { data: resources }
                        ));
                })
                .catch((error) => {
                    res.status(400).send({ error: error }); x
                })
        })
})

router.post('/', (req, res, next) => {
    UserModel
        .getCollection()
        .then((collection) => {
            collection
                .insertOne(req.body)
                .then((result) => {
                    res.status(201).send(result);
                })
                .catch((error) => {
                    res.status(400).send({ error: error });
                });
        })
})


module.exports = router;