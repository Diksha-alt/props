import React from "react";
import "../Components/style.css";

const imagecircle={
    height:"300px",
    width:"300px",
}


function Card(props) {
    return (
      <>
      <div className="col-md-4">
        <div className="service-box">
            <div className="rounded-circle mx-auto mb-4" style={imagecircle}>
                <img src={props.image} className="w-100 rounded-circle h-100"/>
            </div>
            <h2>{props.title}</h2>
            <p className="text-secondary">{props.desc}</p>
        </div>
      </div>
      
      </>
  );
}

export default Card;