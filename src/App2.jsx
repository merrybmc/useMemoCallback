import React, { useMemo, useState } from 'react';

export default function App2() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardCalculate = (number) => {
    console.log('hard');
    for (let i = 0; i < 99999999999; i++) {
      return number + 10000;
    }
  };

  const easyCalculate = (number) => {
    console.log('easy');
    return number + 1;
  };

  //   const hardSum = hardCalculate(hardNumber);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type='number' value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
      <span>+ 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input type='number' value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
      <span>+ 10000 = {easySum}</span>
    </div>
  );
}
