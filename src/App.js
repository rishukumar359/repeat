import logo from './logo.svg';
// import './App.css'; 
import Button from 'react-bootstrap/Button';

import { Routes, Route } from "react-router-dom";

import  Getuser from './getuser.jsx';
import  Getuser1 from './getuser6.jsx';
import  Basic from './getuser2.jsx';
import  Edit1 from './Edit1' ;
import  Edit from './Edit' ; 
import  Model2 from './model.jsx' ; 
import NavBar from './navbar'; 
import Welcome from './Welcome'; 
import Rout from './Router'; 
import Sign from './sign';  
import Forgot from './Forgot'; 
import Otp from './otp' 
import Day1 from './Day1';  
import Timer from './PracticeDay1'


// import { lazy, Suspense } from 'react'; 
// const Home = lazy(() => import('./Router')); 

import UsersRecord from "./UsersTable";
import {UserModal} from "./UserModal"
import { React, useState } from 'react'; 

import Repeat from "./Repeat"
function App() {   
  const [usersData,setUsersData]=useState([])
  const [show, setShow] = useState(false);
  const [editUser, setEditUser] = useState(null);
  return (
    <div className="App"> 

     
         
      {/* <UsersRecord 
        usersData={usersData} 
        setUsersData={setUsersData} 
        show={show} 
        setShow={setShow} 
        editUser={editUser}
        setEditUser={setEditUser}
      /> 
      <UserModal 
        usersData={usersData} 
        setUsersData={setUsersData} 
        show={show} 
        setShow={setShow}
        editUser={editUser}
        setEditUser={setEditUser}
      
      />  */}
       {/* <User></User> */}
     
       {/* <Repeat/>   */} 
       <Timer></Timer>
     
      
       <Routes>  
       {/* <Route  path='/user' element={<NavBar></NavBar>}> </Route> */} 
       <Route  path='/Day1' element={ <Day1></Day1>}> </Route> 
       <Route  path='/forgot' element={<Forgot/>}> </Route> 
       <Route  path='/forgot/otp' element={<Otp/>}> </Route> 
       
       
        <Route path='/login' element={<Edit></Edit>}> </Route>
        <Route path='/Edit/:id' element={<Edit />}> </Route>
        
        <Route path='/user1' element={ <Rout/>}> </Route>
      </Routes> 

          {/* <Routes>
      
         <Route path="/" element={<Getuser1 />} />
       </Routes>  */}
    </div>
  );
}

export default App;
