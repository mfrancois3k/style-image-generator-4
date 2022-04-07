 import axios from "axios";
    import "./Box.css";
 
 // for 3d carisual effect for random unsplash images
 //https://codepen.io/nxworld/pen/LbKxOJ


 // for 3d carisual effect for random unsplash images jsx
//  <ul>
//   <li><img src="https://source.unsplash.com/200x200"></li>
// 	<br>
//   <li><img src="https://source.unsplash.com/140x200"></li>
//   <li><img src="https://source.unsplash.com/90x200"></li>
//     <br>
//   <li><img src="https://source.unsplash.com/40x200"></li>
//   <li><img src="https://source.unsplash.com/170x200"></li>
//    <br> 
// <li><img src="https://source.unsplash.com/10x200"></li>
//   <li><img src="https://source.unsplash.com/200x200"></li>
//    <br>  
// <li><img src="https://source.unsplash.com/140x200"></li>
//  <br><br>
// 	<li><img src="https://source.unsplash.com/90x200"></li>
//   <li><img src="https://source.unsplash.com/40x200"></li>
//  <br><br>
//  <li><img src="https://source.unsplash.com/30x200"></li>
//  <li><img src="https://source.unsplash.com/10x200"></li>
// </ul>

// make function that dynamically generates images using unsplash api include with and height in the function and then use it in the box component


// make function that dynamically generates images using unsplash api include with and height in the function and then use it in the box component

 const randomFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // using this url https://source.unsplash.com/random/'+width+'x'+height+'">' dynamically generates images using unsplash api include with and height in the function and then use it in the box component
    // https://source.unsplash.com/random/'+width+'x'+height+'">'

const setSize = (width, height) => {
    return `https://source.unsplash.com/random/${width}x${height}">`
}

// Using setSizeList function append to the end of the url to dynamically generate size 200x200 mappings to 12 and  decrease the width and height by 30 each time
const setSizeList = (width, height) => {
    return (
        <ul>
            <li><img src={setSize(width, height)}></li>
        </ul>
    )

    const setSize2 = (width, height, number) => {
    return `https://source.unsplash.com/random/${width}x${height}">`
}

//https://codesandbox.io/s/practical-lake-yw22u?from-embed=&file=/src/App.js

export default function DynamicComponent() {
  const dialogues = [
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`,
    `https://source.unsplash.com/random/${width}x${height}"`
  ];

  return dialogues.map((element, index) => {
    return (
      <div
        key={index}
        style={{ marginBottom: 20, border: "1px solid #000", padding: 5 }}
      >
       <ul>
        <li><img src={element}></li>
        <img src={element} style={{ width: "20%", maxWidth: "600px" }} />
        </ul>
      </div>
    );
  });
}
