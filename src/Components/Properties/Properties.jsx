import React from 'react'
import "./Properties.css"
import Navbar from "../Navbar/Navbar"
import FilterBox from "../Create/FilterBox"
import Footer2 from '../Footer_Parts/Footer2'
import PropertiesData from "./PropertiesData"

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
      <div className="properties-section2">
        <div className='properties-section2-upper-menu'>
          <div className='properties-section2-view'><h5>VIEW AS:</h5><i class="fa-solid fa-list-ul"></i><i class="fa-solid fa-braille"></i></div>
          <div className='properties-section2-select'>
            <label htmlFor="">ORDER BY:</label>
            <select name="" id="">
              <option value="">Default</option>
              <option value="">Newest</option>
              <option value="">Sales</option>
              <option value="">Ratings</option>
              <option value="">Popularity</option>
            </select>
          </div>
        </div>

        <div className="properties-section2-cards">
          {
            PropertiesData.map((v, i) => {
              return (
                <div className="properties-section2-cards-item">
                  <div className="properties-section2-cards-item-image">
                    <img src={v.image} alt="" />
                    <h4>FOR SALE</h4>
                    <h2>$ {v.price}</h2>
                  </div>
                  <div className="properties-section2-cards-item-content">
                    <h2>{v.heading}</h2>
                    <h5><img src="https://preview.colorlib.com/theme/south/img/icons/location.png.webp" alt="" />{v.subheading}</h5>
                    <p>{v.desc}</p>
                    <div>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/new.png.webp" alt="" /></span>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/bathtub.png.webp" alt="" /><h5>{v.bath}</h5></span>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/garage.png.webp" alt="" /><h5>{v.garag}</h5></span>
                      <span><img src="https://preview.colorlib.com/theme/south/img/icons/space.png.webp" alt="" /><h5>{v.space} sq ft</h5></span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer2 />
    </>
  )
}

export default Properties
