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
      <div className="card-container">
        <h1>Explore Rentals in Chicago, IL</h1>
        <div className="maincard">
          {data.map((v, i) => {
            return (
              <div className="card">
                <div className="image">
                  <img src={v.x} alt="" />
                </div>
                <div className="image-content">
                  <div className="image-content-heading">
                    <h4>{v.heading}</h4>
                  </div>
                  <div className="image-content-para1">
                    <p>{v.para1}</p>
                  </div>
                  <div className="image-content-para2">
                    <p>{v.para2}</p>
                  </div>

                  <div className="info">
                    <p>{v.info}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="card-btn">
            <button>View More</button>
          </div>

        </div>

      </div>

      <Rent />
      <Ownership />
      <ManageProperty />
      <RentingManagement />
    </>
  );
};

export default Cards;
