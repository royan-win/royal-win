import React , {useState,useEffect} from 'react'
import { adminDeposit } from '../redux/actions/auth';
import axios from "axios" ; 
import {useDispatch} from "react-redux" ; 
function Deposit() {
    const  dispatch = useDispatch(); 
    const user = JSON.parse(localStorage.getItem("profile"));
    const [image, setImage] = useState(null) ; 
    const [formdata , setformdata]  = useState({
        name:"",
        email:"",
        phone_no:"",
        amount:"", 
    })

    const handlechange = (e)=>{
        const value = e.target.value ; 
        const name = e.target.name ; 
        console.log(name , value) ; 
        setformdata({...formdata  , [name]:value}) ; 
    }
    const handlesubmit = async(e)=>{
        e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "wagerking");
    data.append("cloud_name", "daynsu4jq");
    try{
    const image = await axios.post(
        "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
        data
      );
      console.log(image) ; 
    dispatch(adminDeposit({formdata , id:user?.result?._id , image:image?.data?.secure_url})); 
    }catch(err)
{
    console.log(err); 
}    }
    return (
        <div>
            <div>
                <h1>Name:</h1>
                <input name="name" onChange={handlechange} type="text" placeholder="Enter Name"/>

                <h1>Email:</h1>
                <input name="email" onChange={handlechange} type="text" placeholder="Enter Email"/>

                <h1>Phone:</h1>
                <input  name="phone_no" onChange={handlechange} type="text" placeholder="Enter Phone no"/>

                <h1>Amount</h1>
                <input  name="amount" onChange={handlechange} type="text" placeholder="Enter amount"/>
                 <input type="file"   onChange={(e) =>setImage(e.target.files[0])}></input>   
                <button type="Submit" onClick={handlesubmit}>Pay Now</button>
            </div>
        </div>
    )
}
export default Deposit
