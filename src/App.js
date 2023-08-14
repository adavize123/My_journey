import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import CardData from "./CardData"

export default function App(){
    const Experiences = CardData.map((item) => {
        return <Card 
                key = {item.id}
                {...item}
                />
        
    })

    return(
        <div>
            <Navbar />

        <section className="card--list">
            {Experiences}
        </section>
        </div>
       
    )
} 
 