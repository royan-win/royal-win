import React from 'react'

function Games() {
    return (
        <div className="grid-flow-col grid">
            <div className="flex border-4 cursor-pointer border-gray-500 hover:border-yellow-400 hover:bg-gray-900 lg:w-72 sm:w-16 rounded-2xl ml-10 items-center p-2">
                <img className="p-2 lg:h-32 md:h-24 sm:h-12" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/A5/DD/A5DD219FED704E17AF3ED87BA0B20534.webp" alt=""/>
                <div className="inline-block pl-5 items-center">
                    <h2 className="pb-8 lg:text-lg sm:text-sm font-semibold">Andar Bahar</h2>
                    <div className="border-gray-400 hover:border-yellow-400 pl-2 w-20 rounded-2xl border-2 items-center p-1">
                        <p className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">Enter Game</p>
                    </div>
                </div>
            </div>
            <div className="flex border-4 cursor-pointer border-gray-500 hover:border-yellow-400 hover:bg-gray-900 w-72 rounded-2xl items-center p-2">
                <img className="p-2 h-32" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/F0/24/F024BCE8DBFB44C58E1BC8C6E09C4B1D.webp" alt=""/>
                <div className="inline-block pl-5 items-center">
                    <h2 className="pb-8 text-lg font-semibold">Color Win</h2>
                    <div className="border-gray-400 hover:border-yellow-400 pl-2 w-20 rounded-2xl border-2 items-center p-1">
                        <p className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">Enter Game</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games
