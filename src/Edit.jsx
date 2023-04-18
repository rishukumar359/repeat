import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Model from './model.jsx'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'; 
import './index.css'

import { useFormik } from 'formik'; 
import {createUserAPI, updateUserAPI} from "./Apis" 
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Edit= ({usersData,setUsersData,show, setShow, editUser, setEditUser}) =>
{
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditUser(null)
    setShow(true)

}; 
    return(
      <div>
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
           <li ><a href="/user"><h2>User Details</h2></a></li>
          
         </Form> 

       )}
     </Formik> 
  
   </div>

    )
    
} 
export default Edit