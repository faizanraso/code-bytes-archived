import React from "react";
import '../styles/LandingPage.css'
import Navbar from "./NavBar";

function LandingPage(){

    return(
        <div className="landing-page-div">
            <Navbar/>
            <div className="text-center mx-auto my-20 md:mt-32 lg:mt-48 max-w-xl">
                <h1 className="text-4xl font-bold text-white mb-8">Code. Together.</h1>
                <p className="opacity-80 text-[#939393] text-lg leading-8 md:text-xl mb-8">Use our in-browser IDE to collaborate with others and develop amazing projects, for free!</p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-7 border-b-4 border-blue-700 hover:border-blue-500 rounded">Start Coding</button>
            </div>
        </div>
    )
}

export default LandingPage;