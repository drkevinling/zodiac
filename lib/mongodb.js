import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://<username>:<password>@tpacluster1.avjzr.mongodb.net/?retryWrites=true&w=majority&appName=TPACluster1'; // Replace with your MongoDB connection string
const dbName = 'testdb'; // Replace with the name of your database

let client;
let clientPromise;
console.log(process.env.MONGODB_URI);

if (!process.env.MONGODB_URI) {
  console.log(process.env.MONGODB_URI);
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
