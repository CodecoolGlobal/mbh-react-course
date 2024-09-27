import React from "react";

function Cat(props) {
  return (
    <div>
      <h1>Meet {props.name}</h1>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Cat;
