import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import MainPage from "./Components/Main_Page/MainPage"
import Properties from "./Components/Properties/Properties"
import Home from "./Components/Home/Home"
import Aboutus from "./Components/About_Us/Aboutus"
import Contact from './Components/Contact/Contact';


function App() {
  return (
   <>
      <Routes>

        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
   </>
  );
}

export default App;
