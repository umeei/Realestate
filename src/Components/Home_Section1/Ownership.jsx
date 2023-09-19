import React from "react";
import "./Rent.css";

const Ownership = () => {
  return (
    <>
      <div className="rent-maincontent ">
        <hr />
        <div className="rent-upper">
          <h1>Discover Homeownership on Homes.com</h1>
          <h5>
            Renting is great, but maybe you’re thinking about buying a home instead. We want you to find the right place. That’s why our sister site, Homes.com, is designed to help you find your dream home, even if you’re a first time buyer.
          </h5>
        </div>
        <div className="rent-lower">
          <div className="rent-lower-content">
            <h3>Explore Your Options</h3>
            <p>
              Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.
            </p>
            <a href="/adf">Start Your Search</a>
          </div>
          <div className="rent-lower-image">
            <img
              src="https://www.apartments.com/a/168af7/modules/homepagev2/content/images/widgets/widget_discover_home_ownership_1407.jpg"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Ownership;
