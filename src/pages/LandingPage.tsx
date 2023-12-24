import Navbar from "../templates/Navbar";
import blockImage from "../assets/img/blockchain.png"

function LandingPage(){
    return(
    <div className="h-screen" style={{background: `linear-gradient(to right, #121212, #0a0a2a, #121212)`}}>  
        <Navbar/>
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-orange-400 pt-10">The Next Level Ticketing Service </h1>
            <h3 className="text-slate-400">make your ticket secure with NFT and blockchain tecnology!</h3>
            <img className="" src={blockImage} alt="" />  
            </div>
        </div>
        
        
    </div>
    )
}

export default LandingPage;