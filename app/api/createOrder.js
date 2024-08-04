import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
const createOrder = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { items } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db();

    const newOrder = {
      _id: new ObjectId(),
      status: 'pending',
      items,
      timestamp: new Date(),
      expiredAt: new Date(new Date().getTime() + 30 * 60 * 1000), // Expires in 30 minutes
    };

    const result = await db.collection('orders').insertOne(newOrder);

    res.status(201).json({ success: true, orderId: result.insertedId });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export default createOrder;
