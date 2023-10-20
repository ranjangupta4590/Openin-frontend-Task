// import React, { useState } from 'react';
import { AiOutlinePieChart } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { LuCalendarClock, LuSettings } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";
// import { FaBars,FaTimes } from "react-icons/fa";

const Sidebar = () => {

    // const [nav, setNav] = useState(false);
    // const handleClick = () => setNav(!nav);

    return (
        

        
        <div className='hidden lg:flex lg:flex-col bg-blue-500 px-12 py-10 rounded-xl text-white h-[90%] justify-between min-w-[17%] fixed overflow-y-auto'>

        {/* <div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars /> : <FaTimes />}
  </div> */}
                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl font-bold'>Board.</h1>
                    <div className="mt-10 text-md  w-full">

                        <ul className="flex items-center my-2 py-2 hover:font-bold active:font-bold">
                            <AiOutlinePieChart className="w-6 h-6 mr-4 " />
                            <h1>Dashboard</h1>
                        </ul>
                        <ul className="flex items-center my-2 py-2 hover:font-bold">
                            <ImPriceTags className="w-6 h-6 mr-4" />
                            <h1>Transaction</h1>
                        </ul>
                        <ul className="flex items-center my-2 py-2 hover:font-bold ">
                            <LuCalendarClock className="w-6 h-6 mr-4" />
                            <h1 className="">Schedules</h1>
                        </ul>
                        <ul className="flex items-center my-2 py-2 hover:font-bold">
                            <BiUserCircle className="w-6 h-6 mr-4" />
                            <h1>Users</h1>
                        </ul>
                        <ul className="flex items-center my-2 py-2 hover:font-bold">
                            <LuSettings className="w-6 h-6 mr-4" />
                            <h1>Settings</h1>
                        </ul>
                    </div>
                </div>
                
                <div >
                    <ul className='py-2 hover:font-bold'>Help</ul>
                    <ul className='py-2 hover:font-bold'>Contact Us</ul>
                </div>
            </div>

        
    )
}

export default Sidebar;