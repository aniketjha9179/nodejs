// connection mongo db with node

const { MongoClient } = require("mongodb");
const database = "e-commerce";
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  //telling which table to connect of mongodb
  return db.collection("products");
}
module.exports = dbConnect
