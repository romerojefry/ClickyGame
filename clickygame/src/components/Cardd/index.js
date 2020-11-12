import React from "react";
import "./style.css";

const Cardd = props => {

   <div className="card" onClick={() => props.clickedDogs(props.id)} className="get">
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>

   </div>
}

export default Cardd;
