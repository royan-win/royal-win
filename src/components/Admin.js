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
        <div className="w-full bg-back-img h-screen flex flex-col justify-items-center justify-center items-center">
        <div className="bg-yellow-400 p-8 rounded-2xl w-72 -mt-44">
        <h1 className="items-center justify-center flex text-gray-800 font-semibold text-xl">Admin</h1>
    {error !== null ? (
          <h4 style={{ color: "red", fontWeight: "500" }}> {error}</h4>
        ) : (
          " "
        )}
        <input className="pl-5 mt-3 outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2" type="text" name="username" placeholder="username" onChange={handlechange}></input>
        <input className="pl-5 mt-3 outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2" type="password" name="password" placeholder="password" onChange={handlechange}></input>
        <button className="m-3 w-24 rounded-lg h-9 bg-gray-800 text-white border-none shadow-md" type="submit" onClick={handlesubmit}>Login</button>
        </div>
        </div>
        </form>
    )
}

export default Admin
