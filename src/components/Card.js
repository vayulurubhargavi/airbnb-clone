import React from "react";


function Card(props) {
     console.log(props);
     let badgeText
     if (props.openSpots === 0) {
         badgeText = "SOLD OUT"
     } else if (props.location === "Online") {
         badgeText = "ONLINE"
     }
  return (
   
      <div className="card"> 
           {/* { props.openSpots === 0 &&<div className="card-badge">SOLD OUT</div>} */}
           { badgeText && <div className="card-badge">{badgeText}</div>} 
            <img src={`image/${props.img}`}/>
            <div className="card-stats">
                <i class="fa-solid fa-star" style={{marginTop: '5px'}}></i>
                <span>{props.rating}.</span>
                <span>({props.reviewCount}).</span>
                <span>{props.location}</span>
             </div>
            <p >{props.title}</p>
            <p className="card-price"><span style={{fontWeight:'bold'}}>From ${props.price}</span> / person</p>
     </div>   

                
  );
}



export default Card;

