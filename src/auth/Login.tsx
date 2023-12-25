import loginImage from '../assets/img/blockchain.png'
import { Link } from 'react-router-dom'
import { Spring } from 'react-spring'
import { useState } from 'react'
import 'animate.css'

function Login(){

    return(
        <div className="w-full h-screen flex justify-center items-center" style={{backgroundImage:loginImage}}> 
            <div className="animate__animated animate__rotateInUpLeft h-2/3 w-2/3 flex items-center justify-center">
                <div className="w-1/3 h-full p-8 shadow-lg rounded-l-xl flex justify-center items-center" style={{background: `rgba(255, 255, 255, 0.1)`, boxShadow:`0 4px 6px rgba(255, 255, 255, 0.5)`, backdropFilter: `blur(10px)`}}>
                    <img
                    src={loginImage}
                    alt="Login"
                    className="object-contain w-full "
                    />
                </div>

                <div className="w-1/3 h-full p-8 shadow-md rounded-r-xl" style={{background: `rgba(255, 255, 255, 0.1)`, boxShadow:`0 4px 6px rgba(255, 255, 255, 0.5)`, backdropFilter: `blur(10px)`}}>
                    <div className='flex justify-end'>
                        <Link to={'/'}>
                        <button className="text-gray-200">X</button>
                        </Link>
                    </div>
                    <h2 className="text-xl text-gray-200 font-bold mb-8 text-center">Login with your account</h2>

                    <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-200">
                        Username
                        </label>
                        <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='username'
                        className="w-full p-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="password" className="block text-gray-200">
                        Password
                        </label>
                        <input
                        type="password"
                        placeholder='password'
                        id="password"
                        name="password"
                        className="w-full p-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="mb-8">
                    <button
                        type="submit"
                        className="w-full bg-gray-300 text-neutral-900 font-bold p-2 rounded-md hover:bg-gradient-to-r hover:from-blue-800 hover:to-black focus:outline-none focus:ring focus:border-blue-300"
                        >
                        Login
                    </button>
                    <p className='text-sm'>don't have an account? <span>Sign Up</span></p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login