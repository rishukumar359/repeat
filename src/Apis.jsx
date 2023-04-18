import axios from "axios"
const url="http://localhost:3020"

export const getUsersAPI=async()=>{

    try{
        const response = await axios.get(url+"/users")
        return response
    }
    catch(error){
          console.log(error)
    }

}

export const createUserAPI=async(data)=>{ 
    console.log(data)
    try{
        const response = await axios.post("http://localhost:3020/signupsend",data)

        return response;
        
        
    }
    catch(error){
        console.log(error)
    }

} 

export const SignInAPI=async(data)=>{ 
   
    try{
        const response = await axios.post("http://localhost:3020/signin",data)

       if (response.status==200){
        Promise.resolve(response)  
       return response
       } 
      
        
    }
    catch(error){  
        
        return Promise.reject(error)
        
    }

}

export const deleteUserAPI = async(userId)=>{
    try{
        axios.delete(url+"/deluser/"+userId)
        .then((response) =>{
            console.log(url+"/deluser/"+userId)
            return response; 
            
        })
    }
    catch(error){
        console.log(error)
    }
}

export const updateUserAPI=async(Id,values) => {
    try{
        const response = await axios.patch(url+`/users/${Id}`, values)
        return response
    }
    catch(error){
  
      console.log("error",error)
    }
  }


  export const Emailverify=async(data)=>{ 
   
    try{
        const response = await axios.post("http://localhost:3020/forgot",data)

       if (response.status==200){
        Promise.resolve(response)  
       return response
       }    
    }
    catch(error){  
        
        return Promise.reject(error)
        
    }

}
