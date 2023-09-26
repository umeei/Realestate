import React from "react";
import "./Rent.css";
const Rent = () => {
  return (
    <>
      <div className="rent-maincontent ">
        <hr />
        <div className="rent-upper">
          <h1>The Most Rental Listings</h1>
          <h5>
            Choose from over 1 million apartments, houses, condos, and townhomes
            for rent.
          </h5>
        </div>
        <div className="rent-lower">
          <div className="rent-lower-content">
            <h3>Renting Made Simple</h3>
            <p>
              Browse the highest quality listings, apply online, sign your
              lease, and even pay your rent from any device.
            </p>
            <a href="/adf">Find Out More</a>
          </div>
          <div className="rent-lower-image">
            <img
              src="https://www.apartments.com/a/ce6073/modules/homepagev2/content/images/widgets/widget_renting_made_simple_469.png"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Rent;
