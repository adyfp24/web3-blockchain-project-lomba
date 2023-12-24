import reactImage from '../assets/react.svg'
import { useState } from 'react'
import Login from '../auth/Login'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar(){

    return(
        <nav className="pt-5 z-50 flex flex-row justify-between w-full h-20 text-neutral-500">
            <div className="flex ml-8 items-center h-full">
                <img src={reactImage} alt="" />
            </div>
            <ul className="my-2 border-emerald-100 rounded-3xl flex justify-center items-center" style={{background: `rgba(255, 255, 255, 0.1)`,boxShadow:`0 4px 6px rgba(0.0, 0.0, 0.0, 0.1)`, backdropFilter: `blur(10px)`}}>
                <Link to={'/'}>
                <li className="mx-10 hover:bg-teal-700">Home</li>
                </Link>
                <Link to={'/About'}>
                <li className="mx-10">About</li>
                </Link>
                <Link to={'/Events'}>
                <li className="mx-10">Events</li>
                </Link>
                <li className="mx-10">My ticket</li>
            </ul>
            <div className="flex mr-8 items-center h-full">
                <Link to={'/Login'}>
                   Login
                </Link>
            </div>
        </nav>
    )
}

export default Navbar