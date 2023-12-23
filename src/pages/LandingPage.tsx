import Navbar from "../templates/Navbar";

function LandingPage(){
    return(
    <div>   
        <Navbar/>
        <div className="mt-10 flex justify-center">
            <h1 className="text-orange-400">ini landing bukan sembarang landing...</h1>
        </div>
    </div>
    )
}

export default LandingPage;