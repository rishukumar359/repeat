import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import  Model from './model.jsx' 
import axios from 'axios' 
import Modal from 'react-bootstrap/Modal';



function Getuser(){ 
    const [users, setUsers] = useState();
    const [show, setShow] = useState(false); 
    const handleShow = ()=> setShow(true);
    const handleClose = () => setShow(false);
    const [name, setname] = useState(); 
    const [age,setage]=useState(); 
    const [sub,setSub]=useState();  
    const [data,setdata]=useState();
    const [post,setPost]=useState();

    const nameonchange=(e)=>{
        setname(e.target.value)
    } 
    
    const rollonchange=(e)=>{
        setage(e.target.value)
    } 
    // const subonchange=(e)=>{
    //     setSub(e.target.value)
    // }
  
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

const formSubmit=(e)=>{
    e.preventDefault() 
    if (name=="" ||age==""){
        alert("blank") 
        return 
    } 
   
  } 

    


    const postdata= async()=>{
        try{
            axios.post("http://localhost:3020/add_user",{
                name ,age
            }) 
            .then((res)=>{
                setPost(res.users)
        })
        } 
        catch(e){
            console.log(e)
        }   
        getApiData()
       
    }


  
return ( 
    <> 
    <Button variant="primary" onClick={handleShow}>
       add user
     </Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form  onSubmit={formSubmit}>
NAME:<input  type="text" id="name"   name="name" onChange={nameonchange}></input> 
AGE:<input  type="text" id="age"   name="age" onChange={rollonchange}></input>



</form> 
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" onClick={postdata}>
        submit
      </Button>
      <Button variant="primary" onClick={handleClose}>
       close
      </Button>
    </Modal.Footer>
  </Modal> 

   <div> 
    <Table>
   <thead>
      <tr>
        <th>name</th>
        <th>age</th>
        
      </tr>
    </thead> 
    <tbody>  
      {users && users.length && ( 
        <>
      {users.map((todo)=>{
        return(<tr>
          <td>{todo.name}</td>
          <td>{todo.age}</td>
        
        </tr>)
      
  })
  } 
  </> 
      )}
    </tbody> 
    </Table>
   </div>




    </>
  
)
} 
 
export default  Getuser