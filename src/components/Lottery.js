import React from 'react'

function Lottery() {
    return (
        <div className="grid-flow-col grid">
            <div className="flex border-4 cursor-pointer border-gray-500 hover:border-yellow-400 hover:bg-gray-900 w-72 rounded-2xl ml-10 items-center p-2">
                <img className="p-2 h-32" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/08/D8/08D8F092DE754FD5A8AE93C9658F81AB.webp" alt=""/>
                <div className="inline-block pl-5 items-center">
                    <h2 className="pb-8 text-lg font-semibold">Money Tree</h2>
                    <div className="border-gray-400 hover:border-yellow-400 pl-2 w-20 rounded-2xl border-2 items-center p-1">
                        <p className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">Enter Game</p>
                    </div>
                </div>
            </div>
            <div className="flex border-4 cursor-pointer border-gray-500 hover:border-yellow-400 hover:bg-gray-900 w-72 rounded-2xl items-center p-2">
                <img className="p-2 h-32" src="https://sgp.resourceddos.com/sgp/sun/pc/resource/F6/CC/F6CCA12DE07E4433B8851A182222262B.webp" alt=""/>
                <div className="inline-block pl-5 items-center">
                    <h2 className="pb-8 text-lg font-semibold">Ladder Game</h2>
                    <div className="border-gray-400 hover:border-yellow-400 pl-2 w-20 rounded-2xl border-2 items-center p-1">
                        <p className="text-xs text-gray-400 hover:text-yellow-400 cursor-pointer">Enter Game</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lottery
