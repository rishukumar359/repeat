import axios from "axios"  


export const Getbytoken=async(key)=>{

    localStorage.getItem(key)

} 

export const Setbytoken=async(key,values)=>{
   console.log() 
   

    localStorage.setItem(key,values.data.data)

}