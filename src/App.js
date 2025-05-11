import React from "react";
import GlobalProvider from "./GlobalProvider/GlobalProvider";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Comission from "./Pages/ComissionPage/Comission";
import About from "./Pages/About/About";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        < >
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/comission" element={<Comission/>}/>
        <Route path="/about" element={<About/>}/>
        </>
        


      </Routes>
    </GlobalProvider>
  );
}

export default App;