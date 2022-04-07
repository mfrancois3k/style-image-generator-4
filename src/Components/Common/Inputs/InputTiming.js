import React from "react";

export default function Inputtiming(props) {
  //dynamically reset the time of the animation by passing newTiming as string
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

  function proSpectiveChange(event) {
    console.log(event.currentTarget.value);
    document.documentElement.style.setProperty(
      " --perspective",
      `${event.currentTarget.value}px`
    );
  }

  return (
    <>
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
    </>
  );
}
