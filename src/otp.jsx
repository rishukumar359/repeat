import React, { useState } from "react";
import OtpInput from "react-otp-input"; 
import Button from "react-bootstrap/Button"; 
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const [otp, setOtp] = useState(""); 
  let navigate=useNavigate();
  const path=()=>{
    let routpath="./changepassword";
    navigate(routpath)
  }
  console.log(otp)
  return (
    <>
      <h1>enter otp</h1>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      /> 
      <br/>
      <div > 
          <button type="submit"  class="btn btn-primary m-2">resend otp</button>
        <button type="submit"  class="btn btn-primary">Verify Otp</button>
        </div>
    </>
  );
}
