import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Sacmis:23D03e28j@cluster0.okfaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
