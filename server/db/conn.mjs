import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://[Database Username HERE] : [Database Password HERE] @cluster0.hm07chh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
