import React from "react";
import "./Cards.css";
import data from "./data";
import Rent from "../Home_Section1/Rent";
import Ownership from "../Home_Section1/Ownership";
import ManageProperty from "../Home_Section1/ManageProperty";
import RentingManagement from "../Home_Section1/RentingManagement";

const Cards = () => {
  return (
    <>
      <div className="container">
      <div className="maincard">
        {data.map((v, i) => {
          return (
            <div className="card">
              <div className="image">
                <img className="imagecards" src={v.x} alt="" />
              </div>
              <div>
                  <h4 className="cardheading">{v.heading}</h4>
                </div>
                <div >
                  <p className="paracard">{v.para1}</p>
                </div>
                <div>
                  <p className="paracard2">{v.para2}</p>
                </div>

                <div className="info">
                  <p>{v.info}</p>
                </div>
                
            </div>
          );
        })}
        
      </div>
      
      </div>
      <div className=" btn-center">
          <span className="btn btn-center">View More</span>
        </div>

      <Rent/>
      <Ownership/>
      <br />
      <ManageProperty/>
      <RentingManagement/>
    </>
  );
};

export default Cards;
