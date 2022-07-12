import React from "react";
import '../styles/LandingPage.css'
import Navbar from "./NavBar";
import LandingPageContent from "./LandingPageContent";

function LandingPage(){

    return(
        <div className="landing-page-div">
            <Navbar/>
            <LandingPageContent/>
        </div>
    )
}

export default LandingPage;