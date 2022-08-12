import  React from "react"


export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.item.openSpots === 0 ) {
        badgeText = "SOLD OUT"

    }else{
        badgeText = "ONLINE"

    }

    return (


        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={process.env.PUBLIC_URL + props.item.coverImg} className="card-image" />
            <div className="card-stats">
                <img src={require("./images/image 27.png")} className="star"/>
                <span>&nbsp;{props.item.stats.rating}</span>
                <span>{props.item.stats.reviewCount}</span>
                <span>{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p> From {props.item.price}</p>
        </div>
    )

}
