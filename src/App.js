//import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home/Home";
import Image from "./Components/Image/Image";
import Box from "./Components/Box/Box";
import "./App.css";

// export const ImageContext = createContext();
const App = () => {
  return (
    <div className="App">
      {/* <ImageContext.Provider value=""> */}
      <BrowserRouter>
        <nav>
          <NavLink to="/image">Image</NavLink>
          <NavLink to="/box">Box</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<Image />} />
          <Route path="/box" element={<Box />} />
        </Routes>
      </BrowserRouter>
      {/* </ImageContext.Provider> */}
    </div>
  );
};

export default App;
