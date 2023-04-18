import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
// const axios =require('axios') 
// import axios, * as others from 'axios'; 
function Api1() {

// const [rep,setRep]=useState([])

// const getRep=()=>{
//   Axios.get('http://localhost:3010/getuser')
//   .then((res)=>{
//     console.log(res);
//     const myrep=res.data 
//     setRep(myrep)
//   }) 

  


// useEffect(()=>getRep(),[]);



async function fetch(url){ 
  try{
    // const res=await Axios.get('http://localhost:3010/getuser')
    // console.log(res) 

    axios
    .get("http://localhost:3010/getuser")
    .then(function (response) {
      console.log(response);
    });

  } 
  catch(e){
    console.log(e)
  }

} 
fetch('http://localhost:3010/getuser') 
} 
export default Api1