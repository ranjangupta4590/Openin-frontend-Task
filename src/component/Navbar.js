import React, { useState } from 'react';
import profile from '../images/user.png';
import { BsBell } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { auth } from './authen/config';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [login,setLogin] =useState(false);
  const user=JSON.parse(localStorage.getItem('user'));
  const navigate=useNavigate();
  
const logOut = async() => {
      try{  
          await signOut(auth);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/signin');
      }catch(error){
          console.log(error);
      }
      
  }
  return (
    <div className='m-auto md:min-w-[100%]   max-w-[90%] flex justify-between pb-7'>
      <div className=" px-5 items-center py-2 rounded  ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div id="user" className="pr-6 gap-2 flex items-center">
        <div class="relative hidden sm:flex ">
          <input type="search" id="search" class="border-2  bg-white h-10 px-2 pr-10 rounded-full text-sm" placeholder="Search..." />
          <div class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
        </div>

        <BsBell className="w-5 h-5 mx-2 " />
        <img class="w-10 h-10 rounded-full"
          src={user ?user.photoURL:profile}
          alt="Rounded avatar"
          onClick={() => setLogin((prev) => !prev)}
        />

      </div>



      { login && (
      <div className="absolute z-10 flex flex-col p-5 mt-2 drop-shadow-xl top-20 right-10">
        <button
          className="bg-blue-500 rounded p-2 text-white font-bold text-sm"
          onClick={logOut}
        >
          Logout
        </button>
      </div>
      )}

    </div>
  )
}

export default Navbar;