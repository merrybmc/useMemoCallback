import { useMemo } from 'react';
import './App.css';

function App() {
  // 컴포넌트가 렌더링이 될 때 마다 value는 초기화되고 calculate 함수를 호출한다.
  // 렌더링이 될 때 마다 같은 값을 반복적으로 할당하게 된다.
  const value = calculate();

  function calculate() {
    return 10;
  }

  // 처음에 함수가 실행된 값을 메모리에 저장한 후
  // 렌더링이 되어도 값이 똑같으면 함수를 호출하지 않고 메모리에 저장한 값을 재사용
  const value2 = useMemo(() => {
    calculate();
  }, []);
  //  [](의존성 배열) = 안에 들어가는 값이 업데이트 될 때만 useMemo 안의 콜백함수를 다시 실행

  return <div>{value}</div>;
}

export default App;
