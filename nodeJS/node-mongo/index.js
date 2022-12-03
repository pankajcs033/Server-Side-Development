const MongoClient = require('mongodb');
const assert = require('assert');

const url = 'mongodb://0.0.0.0:27017/';
const dbname = 'conFusion';
const client = new MongoClient(url);

// MongoClient.connect(url, (err, client) => {

    // assert.equal(err,null);
async function run() {

    try{
        const db = client.db(dbname);
        const collection = db.collection("dishes");

        const result = await collection.insertOne(
            {"name": "Uthappizza", "description": "test"}
        );

        console.log(`A document was inserted with the _id: ${result.insertedId}`);


    } finally {
        // client.close();
    }
}
run().catch(console.dir);


//     console.log('Connected correctly to server');

    
    
//     collection.insert(,
//     (err, result) => {
//         // assert.equal(err,null);

//         console.log("After Insert:\n");
//         console.log(result);

//         collection.find({}).toArray((err, docs) => {
//             // assert.equal(err,null);
            
//             console.log("Found:\n");
//             console.log(docs);

//             db.dropCollection("dishes", (err, result) => {
//                 // assert.equal(err,null);

//                 client.close();
//             });
//         });
//     });

// });