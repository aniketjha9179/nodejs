// connection mongo db with node

const { MongoClient } = require("mongodb");
const database = "e-commerce";
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  //telling which table to connect of mongodb
  let collection = db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();
