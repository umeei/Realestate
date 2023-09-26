import React from "react";
import "./Rent.css";
const ManageProperty = () => {
  return (
    <>
      <div className="rent-maincontent ">
        <hr />
        <div className="rent-upper">
          <h1>The Perfect Place to Manage Your Property</h1>
          <h5>
            Work with the best suite of property management tools on the market.
          </h5>
        </div>
        <div className="rent-lower">
          <div className="rent-lower-content">
            <h3>Advertise Your Rental</h3>
            <p>
              Connect with more than 75 million renters looking for new homes
              using our comprehensive marketing platform.
            </p>
            <a href="/adf">List Your Property</a>
          </div>
          <div className="rent-lower-image">
            <img
              src="https://www.apartments.com/a/815e90/modules/homepagev2/content/images/widgets/widget_advertise_your_rental_1407.png"
              alt=""
            />
          </div>
          
        </div>

        <div className="rent-lower">
          <div className="rent-lower-image" id="reverse-rent-lower-image">
            <img
              src="https://www.apartments.com/a/5a10d2/modules/homepagev2/content/images/widgets/widget_lease_100_online_1407.png"
              alt=""
            />
          </div>
          <div className="rent-lower-content" id="reverse-rent-lower-content">
            <h3>Advertise Your Rental</h3>
            <p>
              Connect with more than 75 million renters looking for new homes
              using our comprehensive marketing platform.
            </p>
            <a href="/adf">List Your Property</a>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ManageProperty;
