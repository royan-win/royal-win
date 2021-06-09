import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {useHistory} from "react-router-dom" ; 
function Body() {
    const history = useHistory();
    return (
        <div className="relative z-0 mb-auto">
            <div className="flex items-end ml-auto mr-5 mt-5 w-56 inset-y-0 right-0 rounded-full bg-gray-100 p-2 pr-2">
                <FaSearch className="h-6 pr-0 text-gray-600"/>
                <input
                className="right-0 pl-3 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                type="text"
                placeholder="Search Games"
                />
            </div>
            <div className="pb-8 text-white w-full">
                <div className="justify-center mb-6 items-center w-20 left-0 right-0 ml-40 mt-14">
                    <h1 className="justify-center text-yellow-400 font-semibold hover:underline w-20 text-xl">LOTTERY</h1>
                </div>
                <div className=" ml-7 grid grid-flow-col space-x-9 justify-start">
                    <div onClick={() => history.push('/moneytree')} className="items-center">
                        <img className="h-20" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/08/D8/08D8F092DE754FD5A8AE93C9658F81AB.webp" alt=""/>
                        <h1 className="font-normal">Money Tree</h1>
                    </div>
                    <div className="items-center">
                        <img className="h-20" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/F6/CC/F6CCA12DE07E4433B8851A182222262B.webp" alt=""/>
                        <h1 className="font-normal">Ladder Game</h1>
                    </div>
                </div>
                <div className="justify-center mb-6 items-center w-20 left-0 right-0 ml-40 mt-14">
                    <h1 className="justify-center items-center text-yellow-400 font-semibold hover:underline w-20 text-xl">HOT</h1>
                </div>
                <div className=" ml-7 grid grid-flow-col space-x-9 justify-start">
                    <div className="items-center">
                        <img className="h-20" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/A5/DD/A5DD219FED704E17AF3ED87BA0B20534.webp" alt=""/>
                        <h1 className="font-normal">Andar Bahar</h1>
                    </div>
                    <div className="items-center ml-1">
                        <img className="h-20" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/F0/24/F024BCE8DBFB44C58E1BC8C6E09C4B1D.webp" alt=""/>
                        <h1 className="items-center justify-center font-normal">Color Win</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
