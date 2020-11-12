import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}
shuffleArray = Dogs => {
  for (let i = Dogslength - 1; i> 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [Dogs[i], Dogs[j]] = [Dogs[j], Dogs[i]];
  }
  return (Dogs);
}; 
export default Wrapper;
