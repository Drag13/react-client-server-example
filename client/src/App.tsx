import { UnitDto } from 'rcs-shared';
import { useEffect, useState } from 'react';
import { API_BASE_PATH } from './constants';

import styles from './App.module.css';

function App() {
  const [loosesRequest, setData] = useState({ data: [] as UnitDto[], status: 'pending' });
  const { data, status } = loosesRequest;

  useEffect(() => {
    fetch(`${API_BASE_PATH}/unit`)
      .then((x) => x.json())
      .then((data) => setData({ data, status: 'ok' }))
      .catch(() => setData({ data: [], status: 'failed' }));
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
