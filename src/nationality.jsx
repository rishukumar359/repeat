function Nationality({ar}){  
    console.log(ar)   
    

    return (
    <div> 
        {ar.map((item, index) => (
      <div key={index}> 
      <li><div>fullname:{item.fname+" "+item.lname}</div>
      <div>email: {item.email}</div>
      <div>{item.age>=18 ? "eligble for vote" : "not eligble for vote"}</div>
      
      <div> {item.indian ? <div>
        <div>state: {item.state}</div>
        <div>country: {item.country}</div>
         </div> 




      : "not indian"
      
      
       }</div></li>










      </div>
    ))}

    </div>
    
    )
} 

export default Nationality;