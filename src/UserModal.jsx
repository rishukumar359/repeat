import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import axios from "axios"

import {createUserAPI, updateUserAPI} from "./Apis" 

const SignupSchema = Yup.object().shape({
    Name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required Name'), 
    Age: Yup.number().max(65).required("Invalid Age").integer(),
    Email: Yup.string().email('Invalid email').required('Required Email'),
    Password: Yup.string().required("Required Password ")
  });
  

export const UserModal= ({usersData,setUsersData,show, setShow, editUser, setEditUser}) =>
{
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditUser(null)
    setShow(true)

}; 

// const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setemail] = useState("");
//   const [Password, setPassword] = useState("");

// const createUserAPI=async()=>{
//   try{
//     const response = await axios.post("http://localhost:3020/signupsend",values)

//     return response;
    
    
// }
// catch(error){
//     console.log(error)
// }
  
// }

    return(
        <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add User
      </Button> */} 
      <li ><a href="/ADDuser"><h2>ADD USER</h2></a></li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
       initialValues={editUser ? editUser:{
         name: '',
         age:'',
         email: '',
         Password: ''
         
         

       }}
      //  validationSchema={SignupSchema}
       onSubmit={ async (values) => { 
        console.log("dfrgf")
         if (editUser){
            console.log(editUser)
            const response = await updateUserAPI(editUser._id,values)
            setShow(false);

            const updatedUsersData = usersData.map((item) => {
                if (item._id == editUser._id) {

                  return response.data;
                }
                // console.log(item._id,editUser._id)
          
                return item;
              });
              setUsersData(updatedUsersData)
         }
         else{  
          console.log("dfrgf")
          console.log(values)
             const response = await createUserAPI(values)
             setShow(false);
            setUsersData([...usersData,response.data])
            
         }


         
       }}
     >
       {({ errors, touched }) => (
         <Form> 
            <div className="form-group">
            <label htmlFor='name'>Name
           <Field name="name" className="form-control" />
                {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                <ErrorMessage name="name" />
           </label>
           </div> 
           <div className="form-group">
            <label htmlFor="age">age
                <Field name="age" className="form-control" />{errors.age && touched.age ? (<div>{errors.age}</div>) : null}
                <ErrorMessage name="age" />
            </label>
           </div>
           
           <div className="form-group">
            <label htmlFor="email">email
                <Field name="email" className="form-control" type="email" />{errors.email && touched.email ? <div>{errors.email}</div> : null}
                <ErrorMessage name="email" />
            </label>
           </div>
           <div className="form-group">
            <label htmlFor="Password">Password
                <Field name="Password" className="form-control" />{errors.Password && touched.Password ? (<div>{errors.Password}</div>) : null}
                <ErrorMessage name="Password" />
            </label>
           </div>
           
           
           <Button type='submit'  variant='primary' >Submit</Button>
          
         </Form> 

       )}
     </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> 
      
    </>
    )
}