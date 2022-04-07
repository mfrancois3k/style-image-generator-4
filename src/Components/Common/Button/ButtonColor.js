import { useEffect } from "react";

useEffect(() => {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-red"
  );
  console.log(color);
}, []);

{
  /* <h1>
        Hello StackBlitz!
        <button onClick={() => setColor('orange')}>
          <span>orange</span>
        </button>
      </h1> */
}
// using higher order function to pass primeter to dynamically change dom
function setColor(color) {
  document.documentElement.style.setProperty("--color-red", color);
}

function Buttoncolor(props) {
  return (
    <>
      <p>Start editing to see some magic happen :)</p>
      <span>BLUE</span>
      <button onClick={() => setColor("green")}>green</button>
    </>
  );
}
