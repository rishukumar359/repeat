import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Model from "./model.jsx";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { formik } from "formik";
import { Field, Form, Formik } from "formik";
import { useFormik } from "formik";
import Edit from "./Edit.jsx";

function Getuser1() {
  const [users, setUsers] = useState();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [sub, setSub] = useState();
  const [data, setdata] = useState();
  const [post, setPost] = useState();

  const [isEdit, setisEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(true);
  };

  const Updation = () => {
    return (
      <div>
        <input>name</input>
      </div>
    );
  };

  const rollonchange = (e) => {
    setage(e.target.value);
  };

  const nameonchange = (e) => {
    setname(e.target.value);
  };

  const ageonchange = (e) => {
    setage(e.target.value);
  };
  const emailonchange = (e) => {
    setemail(e.target.value);
  };
  const Passwordonchange = (e) => {
    setPassword(e.target.value);
  };

  const getApiData = () => {
    fetch("http://localhost:3020/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);
  console.log(users);

  const formSubmit = (e) => {
    e.preventDefault();
    if (name == "" || age == "") {
      alert("blank");
      return;
    }
    postdata();
  };

  const postdata = async () => { 
    console.log(name,age,email)
    try {
      axios
        .post("http://localhost:3020/signupsend", {
          name,
          age,
          email,
          Password,
        })
        .then((res) => {
          setPost(res.users);
        });
    } catch (e) {
      console.log(e);
    }
    getApiData();
  };

  const onDelete = (id) => {
    console.log(id);
    // const newusers = [...users]
    axios
      .delete(`http://localhost:3020/delusers/${id}`)
      // const index = users.findIndex((users) => users.id === id)
      // newusers.splice(index, 1)
      // setUsers(newusers)
      .then(() => {
        getApiData();
      });
  };

  const OnEdit = (todo) => {
    console.log("hi");
    return;
  };

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
          {/* <form  onSubmit={formSubmit}>
NAME:<input  type="text" id="name"   name="name" onChange={nameonchange}></input> 
AGE:<input  type="text" id="age"   name="age" onChange={rollonchange}></input>



</form>   */}

          <div>
            <h1>validation</h1>
            <Formik
              initialValues={{ name: "", age: "", email: "", Password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "n required";
                }

                if (!values.age) {
                  errors.age = "a required";
                } else if (values.age < 0) {
                  errors.age = "age should not be negative";
                }

                if (!values.email) {
                  errors.email = "e Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.Password) {
                  errors.Password = "p required";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                postdata();
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
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name}
                  <input
                    type="text"
                    name="age"
                    id="age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.age}
                  />
                  {errors.age && touched.age && errors.age}
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="text"
                    name="Password"
                    id="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Password}
                  />
                  {errors.Password && touched.Password && errors.Password}

                  <button
                    type="submit" 
                    name='submit'
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
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
              <th>email</th>
              <th>Password</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length && (
              <>
                {users.map((todo) => {
                  {
                    /* console.log("hi")
        console.log(todo._id)  */
                  }

                  return (
                    <tr>
                      <td>{todo.name}</td>
                      <td>{todo.age}</td>
                      <td>{todo.email}</td>
                      <td>{todo.Password}</td>
                      <td>
                        {
                          <Button onClick={() => onDelete(todo._id)}>
                            DELETE
                          </Button>
                        }

                        <button onClick={handleEdit}>Edit</button>
                        {showEdit && <Edit todo1={todo} />}
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Getuser1;
