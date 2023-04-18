import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    alert("hello rishu");
  },[count1]);
  return (
    <>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        button1={count1}
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 2);
        }}
      >
        button2={count2}
      </button>
    </>
  );
}

export default Timer;
