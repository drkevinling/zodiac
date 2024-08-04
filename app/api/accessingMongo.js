export default function handler(req, res) {
  res
    .status(200)
    .json({ message: `Your MongoDB URI is ${process.env.MONGODB_URI}` });
}
