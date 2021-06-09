import React, { useState } from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';

function Header() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <header>
            <div className="flex justify-between items-center bg-gray-800 p-1 flex-grow py-2">
                <IconContext.Provider value={{color: "#fff"}}>
                    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 sm:flex">
                        <div className="ml-2 items-center pl-5 pb-2 text-white lg:text-2xl md:text-xl sm:text-lg">
                            <Link to="#" className="ml-2 pl-2 pb-1 text-white lg:text-2xl md:text-xl sm:text-lg">
                                 <FaIcons.FaBars onClick={showSidebar}/>
                            </Link>
                        </div>
                        <nav className={sidebar ? 'w-72 bg-gray-900 h-full overflow-y-scroll absolute flex justify-center z-50 top-0 left-0 transition-all' : 'bg-gray-400 w-72 h-full flex justify-center absolute z-50 top-0 -left-full transition-all'}>
                            <ul className="w-full">
                                <li className=" flex text-white justify-between w-full bg-gray-800">
                                    <div className="grid grid-flow-row">
                                        <Link to="#" className="ml-2 p-2 pl-2 text-white lg:text-2xl md:text-xl sm:text-lg">
                                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                                        </Link>
                                        <h1 className="pl-7 pt-7 text-6xl">👑</h1>
                                    </div>
                                    <div className="grid p-4 grid-flow-row">
                                        <div className="text-base pb-12">Welcome</div>
                                        <div>
                                            <div>
                                                <p>Total fund</p>
                                                <p className="font-normal">COIN. <span className="font-medium text-yellow-400">0</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {SidebarData.map((item, index) => (
                                    <>                                    
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path} className="flex">
                                                {item.icon}
                                                <span className="ml-5">{item.title}</span>
                                            </Link>
                                        </li>
                                        <div className="ml-8 h-0.5 w-52 bg-gray-600"/>
                                    </>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </IconContext.Provider>
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 sm:flex">
                    <img className="h-20 text-white font-semibold sm:text-md md:text-lg text" src="wagerking.png" alt=""/>
                </div>
                <div className="text-black flex items-center text-sm space-x-6 mx-6 whitespace-nowrap">
                    <button className="bg-yellow-400 hover:bg-yellow-300 py-1 px-3 border-gray-100 rounded">Login</button>
                    <button className="bg-red-500 hover:bg-red-400 py-1 px-3 border-gray-100 rounded">Register</button>
                </div>
            </div>
        </header>
    )
}

export default Header
