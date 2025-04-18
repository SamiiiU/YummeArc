import React from "react";
import GlobalProvider from "./GlobalProvider/GlobalProvider";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </GlobalProvider>
  );
}

export default App;