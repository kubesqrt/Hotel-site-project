import  React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src={require("./image 23.png")} className="card-image"/>
            <div className="card-stats">
                <img src={require("./image 27.png")} className="star"/>
                <span>&nbsp;5.0</span>
                <span>6</span>
                <span>1</span>
            </div>
            <p>Life lesson</p>
            <p> From £234</p>
        </div>
    )

}