const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongo_url = "mongodb://127.0.0.1:27017/";

console.log(MongoClient);

function getConnectedDB(db_name) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(
            mongo_url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
            .then((connection) => {
                resolve(connection.db(db_name));
            })
            .catch((error) => {
                reject(error);
            });
    });
}

exports.getConnectedDB = getConnectedDB;