import React, { useCallback, useEffect, useState } from 'react';

export default function App4() {
  const [number, setNumber] = useState(0);

  const someFunction = useCallback(() => {
    console.log(`number : ${number}`);
    return;
  }, []);

  useEffect(() => {
    console.log('someFunction이 변경되었습니다.');
  }, [someFunction]);
  return (
    <div>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}
