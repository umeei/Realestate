import React from 'react'
import "./Properties.css"
import Navbar from "../Navbar/Navbar"
import FilterBox from "../Create/FilterBox"

const Properties = () => {
  return (
    <>
        <Navbar />
        <div className="properties-section1">
            <div className="properties-s1-backimage">
                <img src="https://preview.colorlib.com/theme/south/img/bg-img/hero1.jpg.webp" alt="" />
                <h1>LISTINGS</h1>
                <h5>SEARCH FOR YOUR HOME</h5>
            </div>
            <div className="properties-s1-filterbox">
                <FilterBox />
            </div>
        </div>
    </>
  )
}

export default Properties
