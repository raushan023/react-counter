import React from "react";
import "./Style.css";
const Counter = props => {
  return (
    <div>
      <h1 className="H1">Counter: {props.count} </h1>
      <button className="Button" onClick={props.decCount}>
        {" "}
        -
      </button>
      {"    "}
      <button className="Button" onClick={props.reset}>
        {" "}
        reset{" "}
      </button>{" "}
      {"    "}
      <button className="Button" onClick={props.incCount}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};
export default Counter;
