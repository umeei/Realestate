import React from "react";
import "./Rent.css";
const Rent = () => {
  return (
    <>
      <div className="maincontent ">
        <div>
          <p className="headingcontent">The Most Rental Listings</p>
          <p className="alignc subcontent">
            Choose from over 1 million apartments, houses, condos, and townhomes
            for rent.
          </p>
        </div>
        <div className="content topmargin1">
          <div className="text-content">
            <p className="pcontent-1">Renting Made Simple</p>
            <p className="pcontent-2">
              Browse the highest quality listings, apply online, sign your
              lease, and even pay your rent from any device.
            </p>
            <p className="linkcontent">Find Out More</p>
          </div>
          <div>
            <img
              className="img1"
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
