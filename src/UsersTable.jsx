  import  {Table, Button} from "react-bootstrap"
import {getUsersAPI,deleteUserAPI  } from "./Apis"
import { useState, useEffect } from "react" 
import axios from 'axios' 
 const UsersRecord = ({usersData,setUsersData, show, setShow, editUser, setEditUser}) =>
{
    // const [usersData,setUsersData]=useState([])

    useEffect(()=>{
        getUsersData()
    },[])

    const getUsersData=async ()=>{
        const response = await getUsersAPI()
        if (response.status==200){
            setUsersData(response.data)
        }
    }

    const handleDelete = (userId) => { 
        axios.delete(`http://localhost:3020/delusers/${userId}`)

          .then(() => {
            getUsersData()
          })

        // deleteUserAPI(userId)
        
      }  

    const handleEdit= (user)=>{ 
        console.log("line32")
        setEditUser(user) 
        navigator('/Edit'+`${user._id}`)
        setShow(true)
        
    }
    // console.log(usersData)
    return(
        <div>
            <Table striped bordered hover size ="sm">
                <thead>
                    <tr>
                        
                        <th>Name</th> 
                        <th>Age</th>
                        <th>Email</th>
                        <th>Password</th> 
                        <th>ACTION</th>



                    </tr>

                </thead>
                <tbody>

                    {usersData.map(user => {
                        return(
                            <tr key={user._id}>
                                
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                 <td>{user.Password}</td>
                                  <td> 
                                  {/* <a href="/Edit"><h2>Edit</h2></a> */}
                                    <Button variant = "primary" className="mx-2" onClick={()=>handleEdit(user)}>Edit</Button>
                                    <Button variant = "danger" onClick={()=>handleDelete(user._id)}>Delete</Button>
                                </td>  
                                {/* <li ><a href="/Edit">Edit</a></li> */}
                            </tr>
                        )
                    })}
                </tbody>
                
            </Table>
        </div>
    )
}
export default UsersRecord