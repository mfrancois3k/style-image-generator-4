import React from "react";
import { useEffect, useState } from "react";

import "./style.css";

export default function InputRotate() {
  const [width, setWidth] = useState("40vmin");
  const [rotateXs, setRotateXs] = useState("0deg");
  const [rotateYs, setRotateYs] = useState("0deg");
  const [rotateZs, setRotateZs] = useState("45deg");

  // rotate
  
  function handleOnRotateX(event) {
    setRotateXs(`${event.currentTarget.value}deg`);
    // console.log(event.currentTarget.value);
    // document.documentElement.style.setProperty(
    //   ' --',
    // `${event.currentTarget.value}`
    // );
  }

  function handleOnRotateY(event) {
    setRotateYs(`${event.currentTarget.value}deg`);
    // console.log(event.currentTarget.value);
    // document.documentElement.style.setProperty(
    //   ' --',
    // `${event.currentTarget.value}`
    // );
  }
  
  <hr />
  <label>
    {" "}
    rotateZ
    <input
      type="range"
      min="0"
      max="360"
      defaultValue="360deg"
      onChange={handleOnRotateZ}
    />
  </label>

  <label>
    {" "}
    rotateY
    <input
      type="range"
      min="0"
      max="360"
      defaultValue="360deg"
      onChange={handleOnRotateY}
    />
  </label>

  <label>
    {" "}
    rotateX
    <input
      type="range"
      min="0"
      max="360"
      defaultValue="360deg"
      onChange={handleOnRotateX}
    />
  </label>
}