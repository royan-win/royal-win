import React  , {useEffect} from 'react'
import {useDispatch} from "react-redux" ;
import {userdetails} from "../redux/actions/auth"; 
import { useLocation } from "react-router-dom"; 
function Message() {
    const  dispatch = useDispatch() ;
    const location = useLocation(); 
    const user = JSON.parse(localStorage.getItem("profile"));
    const result = user?.result?.deposit
    console.log(user?.result?._id) ; 
        dispatch(userdetails(user?.result?._id))
        useEffect(() => {
            console.log("hello") ; 
            dispatch(userdetails(user?.result?._id))
        }, [location ,user?.result?._id , dispatch])
    return (
        <div className="bg-back-img">
            <h1 className="ml-36 pt-10 text-yellow-400 font-semibold text-xl">Messages</h1>
            <div className="inline-block mb-32 mt-7">
            {
                user?
                result?.map((record) => (
                    <>
                <div className="flex">
                    <div className="bg-gray-800 rounded-full border-yellow-400 border-2 text-white p-3 m-3 ml-8 mt-4">
                        <h1>{record?.deposited_on}</h1>
                    </div>
                    <div className="bg-gray-800 rounded-2xl border-yellow-400 border-2 text-white p-3 m-3 ml-2 mt-4">
                        <h1>{record?.coins_deposit} more coins deposited in your account</h1>
                    </div>
                </div>
                </>
                )
                ):
                <h1>No message yet</h1>
            }
    

                
            </div>
        </div>
    )
}

export default Message