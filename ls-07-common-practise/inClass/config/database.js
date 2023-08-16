import { MongoClient } from "mongodb";

// Connection URL

const url = process.env.PATH_MONGODB;
const client = new MongoClient(url);

// Database Name
const dbName = "web70";

async function databaseConfig() {
    await client.connect();
    console.log(`Connected successfully to database ${dbName}`);
}

export const db = client.db(dbName);

export default databaseConfig;
