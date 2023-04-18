import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import  Model from './model.jsx' 
import { Modal } from "bootstrap";



function Api2() {
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData =  () => {
       fetch(
      "http://localhost:3010/getuser"
    ).then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data)
    })
    
  };

  useEffect(() => {
    getApiData();
  }, []);
console.log(users)
  
return ( 
  <> 

  
    <div>  
    {/* {JSON.stringify(users)}  */}
    
     { 
    
  
  <Table >
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>roll</th>
      <th>sub</th>
    </tr>
  </thead> 
  
  <tbody>  
    {users && users.length && ( 
      <>
    {users.map((todo)=>{
      return(<tr>
        <td>{todo.id}</td>
        <td>{todo.name}</td>
        <td>{todo.roll}</td>
        <td>{todo.sub}</td>
      </tr>)
    
})
} 
</> 
    )}
  </tbody>
</Table>  

} 
<><Button variant="success">add user</Button>{' '}</>

</div>  
</>
  ) 
}
export default Api2