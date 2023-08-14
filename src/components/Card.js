import React from "react"
import Location from "../images/location.png"

export default function Card(props){
    return(
        <section className="divs">
        <div className="div1">
          <img  src = {props.ImageUrl} alt="img" className="place--image"/>
        </div>

        <div className="div2">

        <img src={Location} alt="img" width="20px" height="20px"/> <span className="card--location"> {props.location} </span> 
        <a href= {props.googleMapUrl}>View on Google Map</a>

        <h2 className="card--title">{props.title}</h2>
        <p> <strong>{props.startDate} - {props.endDate}</strong></p>
        <p className="card--discription">{props.description}</p>
        </div>
        </section>
    )
}
