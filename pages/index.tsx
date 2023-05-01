import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Headb from "../component/Headb";
// import Navbar from 
export default function Home(){
    return(
        <div>
           <Navbar/>
         <Slider/>
         {/* <Headb showMobileNav={undefined} setShowMobileNav={undefined}/> */}
         <Footer/>
        </div>
    )
}