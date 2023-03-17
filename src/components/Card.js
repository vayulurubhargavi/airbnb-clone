import React from "react";


function Card(props) {
     console.log(props);
  return (
   
      <div className="card"> 
            <img src={`image/${props.img}`}/>
            <div className="card-stats">
                <i class="fa-solid fa-star" style={{marginTop: '5px'}}></i>
                <span>{props.rating}.</span>
                <span>({props.reviewCount}).</span>
                <span>{props.country}</span>
             </div>
            <p >{props.title}</p>
            <p className="card-price"><span style={{fontWeight:'bold'}}>From ${props.price}</span> / person</p>
     </div>   

                
  );
}



export default Card;

