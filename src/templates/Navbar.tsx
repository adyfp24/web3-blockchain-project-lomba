import reactImage from '../assets/img/blockchain.png'
import { useState } from 'react'
import Login from '../auth/Login'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar(){

    return(
        <nav className="fixed pt-5 z-50 flex flex-row justify-between w-full h-20 text-neutral-500">
            <div className="flex ml-8 items-center h-full">
                <img className='w-20' src={reactImage} alt="" />
            </div>
            <ul className="my-2 border-emerald-100 rounded-3xl flex justify-center items-center" style={{background: `rgba(255, 255, 255, 0.1)`,boxShadow:`0 4px 6px rgba(0.0, 0.0, 0.0, 0.1)`, backdropFilter: `blur(10px)`}}>
                <Link to={'/'}>
                <li className="mx-10 hover:text-stone-100">Home</li>
                </Link>
                <Link to={'/About'}>
                <li className="mx-10 hover:text-stone-100">About</li>
                </Link>
                <Link to={'/Events'}>
                <li className="mx-10 hover:text-stone-100">Events</li>
                </Link>
                <Link to={'/MyTicket'}>
                <li className="mx-10 hover:text-stone-100">My ticket</li>
                </Link>
            </ul>
            <div className="flex mr-8 items-center h-full">
            <Link to={'/Login'} className="relative">
                <h1 className="bg-transparent hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110 text-white font-bold py-2 px-4 rounded-full">
                &gt; Login
                </h1>
                <div className="absolute inset-0 bg-white opacity-0 rounded-full transition duration-300 ease-in-out transform scale-0 group-hover:scale-100"></div>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar