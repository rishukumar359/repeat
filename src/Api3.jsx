import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; 
import Table from 'react-bootstrap/Table';



function Api3() {
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData =  () => {
       fetch(
      "http://localhost:3020/users"
    ).then(response => {
      return response.json()
    })
    .then(data => { 
        console.log(data)
      setUsers(data)
    })
    
  };

  useEffect(() => {
    getApiData();
  }, []);
console.log(users)
  
return ( 
  <> 

  
   {
    <Table >
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>age</th>
        
      </tr>
    </thead> 
    
    <tbody>  
      {users && users.length && ( 
        <>
      {users.map((todo)=>{
        return(<tr>
          <td>{todo.id}</td>
          <td>{todo.name}</td>
          <td>{todo.age}</td>
        
        </tr>)
      
  })
  } 
  </> 
      )}
    </tbody>
  </Table>  
   }
 
</>
  ) 
}
export default Api3