import React from "react";
import Navbar from "../components/navbar";
import About from "../components/Aboutme";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";


export default function Homepage(){
return (
    <div className="Header" id="home">
        <Navbar/>
        <div className="Container">
            <About/>
            <Portfolio/>
            <Skills/>
        </div>
        <Footer/>
    </div>
)
}
