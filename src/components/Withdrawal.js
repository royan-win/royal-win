import React  , {useState} from 'react'

function Withdrawal() {
    const user = JSON.parse(localStorage.getItem("profile"));

   const result =  user?.result?.withdrwal; 
   console.log(result); 
//    var arr  = [user?.withdrawal]; 
//    record.withdrwal.map((record2)=>(
//     record2.coins_withdrwal
// ))
// console.log(arr); 
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
            </div>
            ))
       }
     </div>

    )}

export default Withdrawal