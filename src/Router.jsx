import UsersRecord from "./UsersTable";
import {UserModal} from "./UserModal"
import React, { useState } from 'react'; 


function Rout() {   
  const [usersData,setUsersData]=useState([])
  const [show, setShow] = useState(false);
  const [editUser, setEditUser] = useState(null);
  return (
    <div >
         


<UserModal 
        usersData={usersData} 
        setUsersData={setUsersData} 
        show={show} 
        setShow={setShow}
        editUser={editUser}
        setEditUser={setEditUser}
      
      /> 
      <UsersRecord 
        usersData={usersData} 
        setUsersData={setUsersData} 
        show={show} 
        setShow={setShow} 
        editUser={editUser}
        setEditUser={setEditUser}
      /> 
      </div>
  )} 
  export default Rout