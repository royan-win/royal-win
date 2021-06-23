import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { adminDepositAllow } from '../redux/actions/auth';
import { adminDepositDecline} from '../redux/actions/auth';
import { admindetails} from "../redux/actions/auth";
const AdminDeposit = () => {
    const dispatch = useDispatch(); 
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("profile"));
   const result = user?.result?.deposit;
   useEffect(() => {
    dispatch(admindetails())
   }, [location , dispatch])
    return (

        <div className="inline-block mb-32 mt-7">
        
      {
        user && 
          result?.map((record)=>(
      <div className="flex">
                 <div className="bg-gray-800 rounded-full border-yellow-400 border-2 text-white p-3 m-3 ml-8 mt-4">
                     <h1>{record?.deposit_on}</h1>
                 </div> 
                 <img style={{height:"200px" , width:"200px"}} src={record?.depositer_screenshot}/>
                 <div className="bg-gray-800 rounded-2xl border-yellow-400 border-2 text-white p-3 m-3 ml-2 mt-4">
                     <h1>{record?.deposit_by} wants to deposit the amount of coins {record?.deposit_Amount}</h1>
                 </div>
                 <button className="bg-gray-800 rounded-2xl border-yellow-400 border-2 text-white p-3 m-3 ml-2 mt-4" value={1} type="submit" onClick={()=>{
                     dispatch(adminDepositAllow({id:record?.depositer_id  , totalcoins:record?.deposit_Amount} , 
                    
                     ))
                 }}>Allow</button>
                 <button className="bg-gray-800 rounded-2xl border-yellow-400 border-2 text-white p-3 m-3 ml-2 mt-4" value={0} type="submit"  onClick={()=>{
                     dispatch(adminDepositDecline({id:record?.depositer_id },
                     
                     ))
                     
                 }}>Decline</button>
             </div>
             
             ))
      }
      </div>
    )
}

export default AdminDeposit
