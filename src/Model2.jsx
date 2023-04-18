import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 

function Model2({show,setshow,handleClose,handleshow}){  

    const [name, setname] = useState(); 
    const [roll,setRoll]=useState(); 
    const [sub,setSub]=useState(); 
    

const nameonchange=(e)=>{
    setname(e.target.value)
} 

const rollonchange=(e)=>{
    setRoll(e.target.value)
} 
const subonchange=(e)=>{
    setSub(e.target.value)
}


    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  onSubmit={formSubmit}>
    NAME:<input  type="text" id="name"   name="name" onChange={nameonchange}></input> 
    ROLL:<input  type="text" id="roll"   name="roll" onChange={rollonchange}></input>
    SUB:<input  type="text" id="sub"   name="sub" onChange={subonchange}></input>
    
   <input type="submit" value='submit'></input>
   </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )

} 

export default Model2