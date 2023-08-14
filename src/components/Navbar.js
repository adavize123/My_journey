import React from "react"
import Cloud from "../images/earth.png"


export default function Nav(){
    return(
       <nav className="navbar">
        
        <img  src= {Cloud} alt="img" width= "40px" height="30px"/>
        <h3>My travel journey</h3>
        
       </nav>
    )
}
