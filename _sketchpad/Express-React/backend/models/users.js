const DBConnector = require('../db/connect');


function getCollection() {
    return new Promise((resolve, reject) => {
        DBConnector
            .getConnectedDB('practice')
            .then((db) => {
                resolve(db.collection('users'));
            })
            .catch((error) => {
                reject(error);
            })
    })
}

exports.getCollection = getCollection;