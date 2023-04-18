import { useState } from "react"
const dic=[{email:'rishu@gmail.com',pass:'123'},
{email:'kumar@gmail.com',pass:'1234'},
{email:'ri@gmail.com',pass:'12345'}] 

function Emailval1(){
    
    const [email,setEmail]=useState(""); 
    const [password,setPassword]=useState(""); 
    

const emailonchange=(e)=>{
    setEmail(e.target.value)
} 

const passonchange=(e)=>{
    setPassword(e.target.value)
} 

const formSubmit=(e)=>{
    e.preventDefault() 
    if (email=="" ||password==""){
        alert("blank")
    } 
    else{
        for(let i in dic){
            if(dic[i].email==email && dic[i].pass==password){
                alert('login')
                return false
            } 
            else{
                alert("invalid") 
                return false
            }
        } 
        

    }
  }
  return (
    <div> 

        <form  onSubmit={formSubmit}>
    <input  type="text" id="email"   name="email" onChange={emailonchange}></input> 
    <input  type="text" id="password"   name="password" onChange={passonchange}></input>
    
   <input type="submit" value='submit'></input>
   </form>
    </div>
  )

} 
export default Emailval1;