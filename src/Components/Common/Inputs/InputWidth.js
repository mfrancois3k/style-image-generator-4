// import React from "react";
// import { useState } from "react";
// // import UnSplash from "./Components/Images/UnSplash";
// // import Individuallmage from "./Components/Images/IndividualImage";
// // // import UseFetchImages from './Hooks/UseFetchImages';

// export  const InputWidth = () => {
//   const [width, setWidth] = useState("40vmin");
//   // const [rotateXs, setRotateXs] = useState("0deg");
//   // const [rotateYs, setRotateYs] = useState("0deg");
//   // const [rotateZs, setRotateZs] = useState("45deg");
//   // const [skewXs, setSkewXs] = useState("0deg");
//   // const [skewYs, setSkewYs] = useState("0deg");
//   // const [translateXs, setTranslateXs] = useState("50px");
//   // const [translateYs, setTranslateYs] = useState("50px");

//   // this function targets the root css varaible an concate string with vmin to make it dynamic
//   function handleOnSizeChange(event) {
//     console.log(event.currentTarget.value);
//     document.documentElement.style.setProperty(
//       "--size-logo",
//       `${event.currentTarget.value}vmin`
//     );
//   }

//   function handleOnWidthChange(event) {
//     setWidth(`${event.currentTarget.value}px`);
//     // console.log(event.currentTarget.value);
//     // document.documentElement.style.setProperty(
//     //   '--width',
//     //   `${event.currentTarget.value}px`
//     // );
//   }
//   function Input({ type, min, max, defaultValue, onChange }) {
//     return (
//       <input
//         type={type}
//         min={min}
//         max={max}
//         defaultValue={defaultValue}
//         onChange={onChange}
//         style={{
//           width: "100px",
//           height: "30px",
//           border: "1px solid black",
//           margin: "10px",
//           padding: "5px"
//         }}
//       />
//     );
//   }

//   return (
//     <div>
//      <Input type="range" min="0" max="100" defaultValue="40" onChange={handleOnSizeChange} />
//      <Input type="range" min="0" max="100" defaultValue="40" onChange={handleOnWidthChange} />

//       <div

//         <div class="tabs__tab--inactive">...</div>
//         <div class="tabs__tab--inactive">...</div>

//     </div>
//   );
// }
