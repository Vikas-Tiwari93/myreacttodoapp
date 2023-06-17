import { useState } from "react";

const Counter = () => {
  let [counter1, setCounter] = useState(10);

  console.log("Re-Render: Counter: ", counter1);

  const onBtnClick = () => {
    console.log('start')
    setCounter(counter1 + 1);
    setCounter(counter1 + 1);
    setCounter(counter1 + 1);
    setCounter(counter1 + 1);
    counter1+=1;
    console.log(counter1)
    counter1+=1;
    console.log(counter1)
    
    console.log('end')
  };

//   setCounter((lastState) => {
//     return lastState + 2;
//   });...to solve stale closure

  return (
    <div>
      <p>Counter: {counter1}</p>
      {/*       {onBtnClick()}*/}
      {/*       <button onClick={onBtnClick()}>Increment via Func</button>
       */}{" "}
        <button
        onClick={function () {
          onBtnClick();
        }}
      >
        Increment via Func
      </button>
      <button onClick={() => onBtnClick()}>Increment via Func</button>
      <button onClick={onBtnClick}>Increment via CB</button>
    </div>
  );
};

export default Counter;
