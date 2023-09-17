import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import MainPage from "./Components/Main_Page/MainPage"
import Properties from "./Components/Properties/Properties"
import Home from "./Components/Home/Home"


function App() {
  return (
   <>
      <Routes>

        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        
      </Routes>
   </>
  );
}

export default App;
