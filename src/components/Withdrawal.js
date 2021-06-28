import React  , {useEffect, useState} from 'react'
import {useDispatch} from "react-redux"; 
import { useLocation} from 'react-router';
import {declineadminwithdrwal} from "../redux/actions/auth" ;
import {allowadminwithdrwal} from "../redux/actions/auth" ;
import {admindetails} from "../redux/actions/auth" ; 
function Withdrawal() {
    const user = JSON.parse(localStorage.getItem("profile"));
    const dispatch = useDispatch(); 
   const result =  user?.result?.withdrwal; 
   console.log(result); 
   const location = useLocation() ; 
   dispatch(admindetails()) ; 
   useEffect(() => {
 dispatch(admindetails()) ; 
   }, [location , dispatch])
    return (
        <div className="inline-block mb-32 mt-7">
       {
          user && 
          result?.map((record)=>(
     
     <div className="flex">
                <div className="bg-gray-800 rounded-full border-yellow-400 border-2 text-white p-3 m-3 ml-8 mt-4">
                    <h1>{record?.withdrwal_on}</h1>
                </div>
               
                <div className="bg-gray-800 rounded-2xl border-yellow-400 border-2 text-white p-3 m-3 ml-2 mt-4">
                    <h1>{record?.withdrwal} wants to withdraw the amount of {record?.coins_withdrwal} coins</h1>
                </div>
                <button className="bg-gray-800 rounded-2xl border-yellow-400 border-2 text-white p-3 m-3 ml-2 mt-4" onClick={()=>{
                    dispatch(allowadminwithdrwal({withdrwal:record?.withdrwal , withdrawer_id:record?.withdrawer_id, coins:record?.coins_withdrwal}))
                }}>Allow</button>
                <button className="bg-gray-800 rounded-2xl border-yellow-400 border-2 text-white p-3 m-3 ml-2 mt-4" onClick={()=>{
                    dispatch(declineadminwithdrwal({coins:record?.coins_withdrwal})); 
                }}>Decline</button>
            </div>
            ))
       }
     </div>

    )}

export default Withdrawal