import React from 'react';
import { Formik, Field } from 'formik';
import { useState,useEffect } from "react";
import axios from 'axios';

const Basic = () => {

  const [data, setData]= useState(null);
  const [show, setShow]= useState(false);
  const handleClose=() => setShow(false);
  const handleShow=() => setShow(false);
  const [name, setName]= useState("");
  const [age, setAge]= useState("");
  const [profession, setProfession]= useState("");
  const [role, setRole]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  
  const [isError, setIsError]= useState(false);

  
  const [post, setPost]= useState();
  const [apiData, getApiData]= useState();

  const fetchdata=async() => {
    try{
      const response=await fetch("http://localhost:3020/users")
      const json=await response.json()
      setData(json)
    }catch(error){
      console.log("error",error);
    }
  }
  console.log(data);
  useEffect(() =>{
    fetchdata();
  },[]);

  return (
    <>
  <div>
    <h1>Fill your form here ! </h1>
    <Formik
      initialValues={{name: '',age: '',profession: '',role: '', email: '', Password: '' }}
      validate={values => {
        const errors = {};

        if(!values.name){
          errors.name = 'fill the name';
        }else if ((values.name.length) <=3 ) 
        {
          errors.name = 'Name is too short';
        }

        if(!values.age){
          errors.age = 'fill the age';
        }

        if (!values.profession) {
          errors.profession = 'fill the profession';
        }
        if(!values.role){
          errors.role = 'fill the role';
        }
        
        if (!values.email) {
          errors.email = 'fill the email';
        } else if (
          !/^[A-Z 0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if(!values.Password){
          errors.Password = 'fill the password';
        }

        return errors;
        
       
      }}
      onSubmit={({name,age,email,Password}, { setSubmitting }) => {
        // console.log("hello");
        const fetchdata=async() => {
          try{
            console.log("hello");

            const response=await fetch("http://localhost:3020/users")
            const json=await response.json();
            setData(json);
          }catch(error){
            // setError(error.message);
            console.log("error",error);
          }
        }
        console.log(data);
    
        const postdata=async()=>{
          try{
            axios.post("http://localhost:3020/signupsend",{
              name,age,email,Password
            })
            .then((response)=>{
              fetchdata()
            })
          }catch(error){
            console.log("error",error)
          }
         fetchdata();
        }
         postdata();
         fetchdata();
        
        setTimeout(() => {
          alert(JSON.stringify(name,age,email,Password, null, 2));
          setSubmitting(false);
        }, 400);
        fetchdata();
      }}
    >
  
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          /><br></br>
          {errors.name && touched.name && errors.name}
          <br></br><br></br>

          <label>Age: </label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            /><br></br>
            {errors.age && touched.age && errors.age}
             <br></br><br></br>
            
            
            
            
            {/* <input */}
            


            {/* onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
            /> <br></br>
            {errors.role && touched.role && errors.role} */}
             <br></br><br></br>

          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /><br></br>
          {errors.email && touched.email && errors.email}
          <br></br><br></br>

          <label>Password: </label>
          <input
            type="password"
            name="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Password}
          /><br></br>
          {errors.Password && touched.Password && errors.Password}
          <br></br><br></br>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  </>
  )
      }

export default Basic;