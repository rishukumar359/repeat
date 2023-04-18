import React, { useState } from "react"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const Day1 = () => {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const [isDisabled2, setDisabled2] = useState(false); 
  const [showA, setShowA] = useState(true);

  const increase = () => {
    setDisabled(false);
    if (counter >= 100000) { 
        toast("number is too large")
      setDisabled2(true);
    } else {
      setCounter(counter + 1);
    }
  }; 
  const decrease = () => { 
    setDisabled2(false);
    if (counter <=0) { 
        toast("number is negative")
      setDisabled(true);
    } else {
      setCounter(counter - 1);
    }
  };
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      > 
     
        {counter}
      </div>
      <div className="buttons"> 
      <ToastContainer />
        <button
          disabled={isDisabled}
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "black",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={decrease}
        >
          Decrement
        </button> 
       
        <button
          disabled={isDisabled2}
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "blue",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={increase}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Day1;
