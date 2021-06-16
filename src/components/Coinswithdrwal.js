import React , {useState} from 'react'
import { useDispatch} from "react-redux";
 import {adminwithdrwal} from '../redux/actions/auth';
import {totalcoinsdata} from "../redux/actions/auth";
const Coinswithdrwal = () => {
     const dispatch = useDispatch() ; 
    const [data,setdata]= useState({
        withdrwal:""
    })
    
    const user = JSON.parse(localStorage.getItem("profile"));
    var userid = user?.result?._id; 
    var[totalcoins ,setotalcoins] = useState(user?.result?.coins) ;
    var [changecoins , setchangecoins] = useState() ;  
    const handlechange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value) ;  
        setdata({ ...data, [name]:value});
        setchangecoins(e.target.value) ; 
    }
    console.log(userid); 
    const handlesubmit = (e)=>{
        e.preventDefault();
        const balance = totalcoins-changecoins; 
        dispatch(adminwithdrwal({withdrwal:changecoins , id:userid , name:user?.result?.Real_name  }));
    }
    return (
        <div className="bg-back-img">
            <h1 className="ml-36 pt-10 text-yellow-400 font-semibold text-xl">Messages</h1>
            <div className="inline-block mb-32 mt-5">
                <div className="ml-12 inline-block">
                    <h1 className="text-yellow-200 mt-10 ml-12 font-semibold text-md pb-5">Enter Withdrawal Amount</h1>
                    <input onChange={handlechange} type="Number" name="withdrwal" className="outline-none ml-16 bg-gray-900 opacity-60 h-10 rounded-3xl" type="text" placeholder="Amount"/><br/>
                    <button onClick={handlesubmit} className="outline-none text-white mt-7 ml-20 h-10 w-32 rounded-xl bg-yellow-600">Send</button>
                </div>
            </div>
        </div>
    )
}
export default Coinswithdrwal
