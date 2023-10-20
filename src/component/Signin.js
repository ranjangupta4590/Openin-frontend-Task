import React from 'react'
import bg from "../images/blue_bg.png";
import { BsGithub, BsDiscord, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { auth, provider } from '../component/authen/config';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
const navigate=useNavigate();

   const handleGoogleSignIn = async () => {
        try{
            const result= await signInWithPopup(auth, provider);
            console.log(result);
            
            localStorage.setItem('token',result.user.accessToken);
            localStorage.setItem('user',JSON.stringify(result.user));
            navigate('/');
        }catch(error){
            console.log(error);
        }
        
    }
    return (

      <div className="flex  h-[100vh] bg-[#ffffff] ">
          <div className="hidden lg:flex  justify-between">
              <img src={bg} alt="blue_bg" class="fixed" />
              <div class="flex flex-col h-full justify-between z-10 px-20 py-10">
                  <h1 className='text-white font-bold text-lg'>LOGO</h1>
                  <div className="ml-20">
                      <h1 className="text-6xl text-white font-bold font-montserrat ">
                          Board.
                      </h1>
                  </div>
                  <div className='flex pl-10'>
                      <ul className='flex justify-center items-center px-5 gap-4'>
                          <li ><BsGithub className="text-white w-8 h-8 cursor-pointer" /></li>
                          <li ><BsTwitter className="text-white w-8 h-8 cursor-pointer" /></li>
                          <li ><BsLinkedin className="text-white w-8 h-8 cursor-pointer" /></li>
                          <li ><BsDiscord className="text-white w-8 h-8 cursor-pointer" /></li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* Sign In */}
          <div className="flex flex-col  md:min-w-[50%] px-10 m-auto items-center justify-center">
              <div>
                  <h1 className="text-4xl font-bold my-2  ">Sign In</h1>
                  <p className="my-2 font-lato">Sign in to your account</p>
              </div>


              <div className="flex  mt-3">
                  <div>
                      {/* {value ? <Dashboard /> : */}
                          <button
                              type="button"
                              className="flex items-center font-montserrat   bg-white  justify-center text-white px-4 py-3 text-xs mr-5 border rounded-md"
                              onClick={handleGoogleSignIn}
                          >
                              <FcGoogle className="mr-2 text-center w-5 h-5" />
                              <h1 className="text-[#858585]">Sign in with Google</h1>
                          </button>
                      
                  </div>
                  <button
                      type="button"
                      className="flex text-[#858585] font-montserrat font-light items-center bg-white px-4 py-3 text-xs  border rounded-md"
                  >
                      <BsApple className="mr-2 text-center w-5 h-5" />
                      <h1 className="">Sign in with Apple</h1>
                  </button>
              </div>

              {/* Login Form */}
              <div className="border min-w-full  md:min-w-[55%] my-5 rounded-lg">
                  <form className="px-5 py-7 ">
                      <label>
                          <span className="font-lato">Email address</span>
                          <br />
                          <input
                              type='email'
                              name='email'
                              className="py-2 font-lato border rounded-lg px-5 w-full mb-4 mt-2 bg-[#f4f1f1]"
                              placeholder="Email/Username"
                              required
                          />
                      </label>
                      <br />
                      <label>
                          <span className="font-lato">Password</span>
                          <br />
                          <input
                              type='password'
                              name='password'
                              placeholder="Password"
                              className="py-2 border font-lato bg-[#f4f1f1] rounded-lg px-5 w-full mb-4 mt-2"
                          />
                      </label>
                      <p className="my-4 text-[#2e5eac] font-lato ">Forgot password?</p>
                      <button
                          type="button"
                          onClick={() => {
                              alert("Signin with Google Button");
                          }}
                          className="w-full py-2 bg-[#4284ed] rounded-lg text-white font-semibold "
                      >
                          Sign In
                      </button>
                  </form>
              </div>
              <div className='justify-center items-center'>
                  <p className="text-center justify-center  my-3 text-sm font-medium">
                      Don't have an account?{" "}
                      <span className="text-[#494eed] cursor-pointer">
                          Register here
                      </span>
                  </p>
              </div>
          </div>
      </div>


  )
}

export default Signin;