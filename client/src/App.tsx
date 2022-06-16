import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [loosesRequest, setData] = useState({ data: [] as any[], status: 'pending' });
  const { data, status } = loosesRequest;

  useEffect(() => {
    async function fetchLooses() {
      try {
        const data = await (await fetch('http://localhost:5000/unit')).json();
        setData({ data, status: 'ok' });
      } catch (error) {
        console.log(error);
        setData({ data: [], status: 'failed' });
      }
    }

    fetchLooses();
  }, []);

  return (
    <main className={styles.app}>
      <h1>Russian looses during the war:</h1>
      {status === 'pending' && <div>...loading...</div>}
      {status === 'failed' && <strong>Something went wrong with the network</strong>}
      {data.map((x, i) => (
        <li key={i}>
          {x.type}:{x.destroyed}
        </li>
      ))}
    </main>
  );
}

export default App;
