import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('testdb');
    const orders = db.collection('orders');

    const order = req.body;

    const result = await orders.insertOne(order);

    res.status(201).json({ message: 'Order created' });
    console.log(result);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
