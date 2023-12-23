function Navbar(){
    return(
        <nav className="flex flex-row justify-between w-full h-16 bg-teal-400">
            <div className="flex ml-8 items-center h-full">
                logo
            </div>
            <ul className="my-2 border-4 border-emerald-100 rounded-3xl bg-teal-200 flex justify-center items-center ">
                <li className="mx-10 hover:bg-teal-700">Home</li>
                <li className="mx-10">About</li>
                <li className="mx-10">Events</li>
                <li className="mx-10">My ticket</li>
            </ul>
            <div className="flex mr-8 items-center h-full">
                login
            </div>
        </nav>
    )
}

export default Navbar