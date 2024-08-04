import insertData from '@/insertOne';

export default function HomePage() {
  return (
    <>
      <div>
        <h1>that is true env var</h1>
        <button onclick={() => insertData()}>insert data</button>
      </div>
    </>
  );
}
