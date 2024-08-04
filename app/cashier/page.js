export default function HomePage() {
  return (
    <div>
      <h1>API URL: {process.env.MONGODB_URI} that is true env var</h1>
    </div>
  );
}
