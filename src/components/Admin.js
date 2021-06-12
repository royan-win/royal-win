import React  , {useState} from 'react'
import {useDispatch , useSelector} from "react-redux" ; 
import { useHistory } from 'react-router';
import { admin } from '../redux/actions/auth';
const Admin = () => {
  const history=useHistory()
  let error = useSelector((state) => state.auth.error);
    const  dispatch = useDispatch() ; 
    const [data, setdata] = useState({
        username:"",
        password:"" ,  
    })
    const handlechange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value); 
        setdata({ ...data, [name]: value  });
    }
    const handlesubmit = (e)=>{
        e.preventDefault() ; 
         dispatch(admin(data , history))
    }
    return (
        <form>
    {error !== null ? (
          <h4 style={{ color: "red", fontWeight: "500" }}> {error}</h4>
        ) : (
          " "
        )}
        <input type="text" name="username" placeholder="username" onChange={handlechange}></input>
        <input type="password" name="password" placeholder="password" onChange={handlechange}></input>
        <button type="submit" onClick={handlesubmit}>Login</button>
        </form>
    )
}

export default Admin
