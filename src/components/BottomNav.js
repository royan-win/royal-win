import React from 'react';
import { AiFillAccountBook, AiFillCreditCard, AiFillHeart, AiFillHome, AiFillProfile } from 'react-icons/ai';
import { IoIosPerson } from 'react-icons/io';

function BottomNav() {
    return (
        <div className="w-full h-screen">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-gray-900 shadow">
                <div id="tabs" className="flex text-white justify-between">
                    <a href="/home" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillHome className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Home</span>
                    </a>
                    <a href="/deposit" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillAccountBook className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Deposit</span>
                    </a>
                    <a href="/promotion" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillHeart className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Promotion</span>
                    </a>
                    <a href="/finance" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillCreditCard className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Finance</span>
                    </a>
                    <a href="/account" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <IoIosPerson className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Account</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default BottomNav
