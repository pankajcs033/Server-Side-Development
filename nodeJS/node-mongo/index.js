const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { copyFileSync } = require('fs');
const dboper = require('./operations');

const url = 'mongodb+srv://pankaj:1234@cluster0.lcgmaf0.mongodb.net/test';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection("dishes");
    
    dboper.insertDocument(db, 
                    {name: "momos", description: "test"}, 
                    'dishes', 
                    (result) => {
        console.log("Insert Document: \n", result);

        dboper.findDocument(db, "dishes", (docs) => {
            console.log("Found Documents:\n", docs);

            dboper.updateDocument(db, 
                                    {name: "momos"}, 
                                    {description: "Updated test"}, 
                                    "dishes", (result) => {
                console.log("Updated Document:\n", result.result);

                dboper.findDocument(db, "dishes", (docs) => {
                    console.log("Found Documents:\n", docs);
                
                    db.dropCollection("dishes", (result) => {
                        console.log("Dropped Collection: ", result);

                        client.close();
                    })
                });
        
            });
        })
    })

});