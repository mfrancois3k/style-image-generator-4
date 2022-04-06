//import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home/Home";
import Image from "./Components/Image/Image";
import Box from "./Components/Box/Box";
import Profile from "./Components/Profile/Profile";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to="/image">Image</NavLink>
          <NavLink to="/box">Box</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<Image />} />
          <Route path="/box" element={<Box />} />
          {/* <Route path="/:boxId" element={<Box />} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      {/* </ImageContext.Provider> */}
    </div>
  );
};

export default App;
