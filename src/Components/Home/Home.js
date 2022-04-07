import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import from image and grab the props to render the image on the screen
// import Image from "../Image/Image";
// import Box from "./Components/Box/Box";

const Home = (props) => {
  const [width, setWidth] = useState("40vmin");
  const [rotateXs, setRotateXs] = useState("0deg");
  const [rotateYs, setRotateYs] = useState("0deg");
  const [rotateZs, setRotateZs] = useState("45deg");
  const [skewXs, setSkewXs] = useState("0deg");
  const [skewYs, setSkewYs] = useState("0deg");
  const [translateXs, setTranslateXs] = useState("50px");
  const [translateYs, setTranslateYs] = useState("50px");
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--color-red"
    );
    console.log(color);
  }, []);

  // using higher order function to pass primeter to dynamically change dom
  function setColor(color) {
    document.documentElement.style.setProperty("--color-red", color);
  }

  // this function targets the root css varaible an concate string with vmin to make it dynamic
  function handleOnSizeChange(event) {
    console.log(event.currentTarget.value);
    document.documentElement.style.setProperty(
      "--size-logo",
      `${event.currentTarget.value}vmin`
    );
  }

  function proSpectiveChange(event) {
    console.log(event.currentTarget.value);
    document.documentElement.style.setProperty(
      " --perspective",
      `${event.currentTarget.value}px`
    );
  }

  // function Change(event) {
  //   console.log(event.currentTarget.value);
  //   document.documentElement.style.setProperty(
  //     " --",
  //     `${event.currentTarget.value}`
  //   );
  // }

  function handleOnWidthChange(event) {
    setWidth(`${event.currentTarget.value}px`);
    // console.log(event.currentTarget.value);
    // document.documentElement.style.setProperty(
    //   '--width',
    //   `${event.currentTarget.value}px`
    // );
  }

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

  function handleOnRotateZ(event) {
    setRotateZs(`${event.currentTarget.value}deg`);
    // console.log(event.currentTarget.value);
    // document.documentElement.style.setProperty(
    //   ' --',
    // `${event.currentTarget.value}`
    // );
  }

  // translate

  function handleOnTranslateX(event) {
    setTranslateXs(`${event.currentTarget.value}px`);
  }

  function handleOnTranslateY(event) {
    setTranslateYs(`${event.currentTarget.value}px`);
  }

  // skew

  function handleOnSkewX(event) {
    setSkewXs(`${event.currentTarget.value}deg`);
  }

  function handleOnSkewY(event) {
    setSkewYs(`${event.currentTarget.value}deg`);
  }

  // this dynamically reset the time of the animation by passing newTiming as string
  function svgTiming(event) {
    //  console.log(event.currentTarget.value)
    const timing = getComputedStyle(document.documentElement)
      .getPropertyValue("--timing-logo")
      .replace("s", "");
    let newTiming = timing;
    if (newTiming < 0.5) {
      newTiming = 20;
    } else {
      newTiming = newTiming / 2;
    }

    document.documentElement.style.setProperty(
      "--timing-logo",
      `${newTiming}s`
    );
  }
  return (
    <div>
      {/* <h1>
        Hello StackBlitz!
        <button onClick={() => setColor('orange')}>
          <span>orange</span>
        </button>
      </h1> */}
      <div className="behindText ">
        <div class="n-text text  positionLeft">Stylish</div>
      </div>
      <div className="behindText right ">
        <div class="n-text textSide  positionRight">Image</div>
      </div>
      <div className="behindText Bottom ">
        <div class="n-text textBottom  ">Generator</div>
      </div>
      <div
        style={{
          width,
          transform: `
           rotateZ(${rotateZs})
           rotateX(${rotateXs})
           rotateY(${rotateYs})
           skewX(${skewXs}) 
           skewY(${skewYs})
           translateX(${translateXs})
           translateY(${translateYs})`,
        }}
        className="Box floating"
      >
        {/* <Images /> */}
        {/* <Box /> */}
      </div>
      <div class="tabs BottomTab">
        <div className="tileTab">2d</div>
        <div class="tabs__tab--active">
          <label>
            {" "}
            TranslateX
            <input
              type="range"
              min="200px"
              max="360"
              defaultValue="360deg"
              onChange={handleOnTranslateX}
            />
          </label>
          <label>
            {" "}
            TranslateY
            <input
              type="range"
              min="200px"
              max="360"
              defaultValue="360deg"
              onChange={handleOnTranslateY}
            />
          </label>
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
          <hr />
          <label>
            {" "}
            width
            <input
              type="range"
              min="0"
              max="60"
              defaultValue="40"
              onChange={handleOnWidthChange}
            />
          </label>

          <label>
            {" "}
            Height
            <input
              type="range"
              min="0"
              max="60"
              defaultValue="0"
              onChange={handleOnSizeChange}
            />
          </label>
          <hr />
          <label>
            Timing
            <input
              type="range"
              min="0"
              max="60"
              defaultValue="40"
              onChange={svgTiming}
            />
          </label>

          <label htmlFor="Perspective">
            Perspective
            <input
              type="range"
              min="0"
              max="2000"
              defaultValue="40"
              onChange={proSpectiveChange}
            />
          </label>
        </div>

        <div class="tabs__tab--inactive">...</div>
      </div>
      {/* 
      <p>Start editing to see some magic happen :)</p>
      <span>BLUE</span>
      {/* <Image image={props.image} /> */}
      <Link to="/image" state={props}></Link>
      <h1 style={{ color: "green" }}>Home Page </h1>
      <button onClick={() => setColor("green")}>green</button> */}
    </div>
  );
};

export default Home;
