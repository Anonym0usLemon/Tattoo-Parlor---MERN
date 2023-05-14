import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://Anonym0usLemon:EVH5150.Wolfgang5@cluster0.hm07chh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;