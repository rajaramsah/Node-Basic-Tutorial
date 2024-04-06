const res = require('express/lib/response');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'e-comm';
const client = new MongoClient(url);

async function dbconnect() {
    // Use connect method to connect to the server
    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection('product');
   
}

module.exports = dbconnect;