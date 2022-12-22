const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { copyFileSync } = require('fs');
const dboper = require('./operations');

const url = 'mongodb+srv://pankaj:1234@cluster0.lcgmaf0.mongodb.net/test';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    dboper.insertDocument(db, {name: "momos", description: "test"}, 
                    'dishes')
            .then((result) => {
                console.log("Insert Document: \n", result.ops);

                return dboper.findDocument(db, "dishes");
            })
            .then((docs) => {
                console.log("Found Documents:\n", docs);
                return dboper.updateDocument(db, 
                                        {name: "momos"}, 
                                        {description: "Updated test"}, 
                                        "dishes");
            })
            .then((result) => {
                console.log("Updated Document:\n", result.result);

                return dboper.findDocument(db, "dishes");
            })
            .then((docs) => {
                console.log("Found Documents:\n", docs);
            
                return db.dropCollection("dishes");
            })
            .then((result) => {
                console.log("Dropped Collection: ", result);

                return client.close();
            })
            .catch((err) => console.log(err));

})
.catch((err) => console.log(err));