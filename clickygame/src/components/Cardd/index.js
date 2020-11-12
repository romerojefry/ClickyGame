import React from "react";
import "./style.css";

function Cardd(props) {
  return (
   <div className="card" onClick={() => props.getDogs(props.id)} className="get">
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>

   </div>
  );
}

export default Cardd;
