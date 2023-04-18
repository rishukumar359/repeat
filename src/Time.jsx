
// import { useState } from "react"
import {useState,useEffect} from "react"; 

function Abc() {
    const [date,setDate]= useState(new Date());
    const [isError,setisError]=useState(false);

    useEffect (()=>{
        const timeid=setInterval(()=>{tick()},1000);

        return clearInterval(timeid)
    },[]); 

    // useEffect(()=>{},[isError]);  

    const handleClick=()=>{ 
        return ("hello")
        setisError(true)
    }

    const tick=()=>{
        setDate(new Date())
    } 
    return (
        <div> {date.toLocaleDateString()}
         

         <button onClick={()=>{ return ("hello")}}>onClick</button>
        </div>
    )

} 

export default Abc