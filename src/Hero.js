import React from "react"

export default function Hero() {
    return(
    <section className="hero">    
        <img src={require("./images/image 24.png")} className="hero-photo"/>
        <h1 className = "main-section">Online experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
    )

}
