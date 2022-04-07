import React from "react";
import { useState } from "react";

function InputSkew(props) {
  const [skewXs, setSkewXs] = useState("0deg");
  const [skewYs, setSkewYs] = useState("0deg");

  // skew

  function handleOnSkewX(event) {
    setSkewXs(`${event.currentTarget.value}deg`);
  }

  function handleOnSkewY(event) {
    setSkewYs(`${event.currentTarget.value}deg`);
  }

  function handleOnSkewZ(event) {
    setSkewZs(`${event.currentTarget.value}deg`);
  }

  return (
    <div>
      <hr />
      <label>
        {" "}
        skewX
        <input
          type="range"
          min="0"
          max="2500"
          defaultValue="360deg"
          onChange={handleOnSkewX}
        />
      </label>
      <label>
        {" "}
        skewY
        <input
          type="range"
          min="0"
          max="360"
          defaultValue="360deg"
          onChange={handleOnSkewY}
        />
      </label>
    </div>
  );
}

export default InputSkew;
