import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter는", counter, "counter2 state는", counter2);
  };

  //1.유저가 버튼을 클릭한다
  //2. counter+1해서 1이됨
  //3. setState함수 호출
  //4. console.log 실행됨
  // 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다
  //함수끝
  //app 다시 re render
  // let counter=0을 거치면서 counter 값은 다시 0으로 초기화가 된다
  // state값은 update가 되면서 다시 render 한다.
  return (
    <div>
      <Box name="1" num={1} />
      <Box name="2" num={2} />
      <Box name="3" num={3} />
      <Box name="4" num={4} />
      <Box name="5" num={5} />
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
